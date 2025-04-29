import random
import requests
import json
import string
from faker import Faker
from faker_vehicle import VehicleProvider

fake = Faker()
fake.add_provider(VehicleProvider)

SPRING_BOOT_BASE_URL = "http://localhost:8080/api"
NUM_CARS = 20
NUM_PARTS = 20
NUM_MANUFACTURERS = 20

def generate_cars():
    cars = []
    
    for _ in range(NUM_CARS):
        car = {
            'brand': fake.vehicle_make(),
            'model': fake.vehicle_model(),
            'productionYear': fake.vehicle_year()
        }
        
        cars.append(car)
        
    return cars

def generate_part_code(part: str):
    style = random.choice(['oem', 'aftermarket', 'serialized'])
    
    if style == "oem":
        # OEM-style: 3 letters, 7 digits, 3 letters (e.g., BMW-1234567-ABC)
        prefix = ''.join(random.choices(string.ascii_uppercase, k=3))
        digits = ''.join(random.choices(string.digits, k=7))
        suffix = ''.join(random.choices(string.ascii_uppercase, k=3))
        return f"{prefix}-{digits}-{suffix}"
    
    elif style == "aftermarket":
        # Aftermarket-style: 3 letters + 3-4 alphanumeric (e.g., BOSCH-A5X9)
        brand = random.choice(["BOSCH", "DELPHI", "MAGNETI", "DENSO", "ACDELCO", "VALEO"])
        suffix = ''.join(random.choices(string.ascii_uppercase + string.digits, k=random.randint(3,4)))
        return f"{brand}-{suffix}"
    
    elif style == "serialized":
        # Serialized format: PART-XXX-XXX-YYYY
        block1 = ''.join(random.choices(string.ascii_uppercase + string.digits, k=3))
        block2 = ''.join(random.choices(string.ascii_uppercase + string.digits, k=3))
        year = str(random.randint(2018, 2024))
        return f"{part}-{block1}-{block2}-{year}"

def generate_parts():
    parts = []
    
    for _ in range(NUM_PARTS):
        category = random.choice(['ENGINE', 'TIRES', 'EXHAUST', 'SUSPENSION', 'BRAKES'])
        
        part = {
            'name': fake.company(),
            'code': generate_part_code(category),
            'category': category,
            'buyPrice': round(random.uniform(40, 1000), 2),
            'sellPrice': round(random.uniform(40, 1000), 2)
        }
        
        parts.append(part)
        
    return parts
        
def generate_manufacturers():
    manufacturers = []
    
    for _ in range(NUM_MANUFACTURERS):
        manufacturer = {
            'name': fake.company(),
            'country': fake.country(),
            'address': fake.address(),
            'phoneNumber': fake.phone_number(),
            'fax': fake.phone_number()
        }
        
        manufacturers.append(manufacturer)
        
    return manufacturers


def post_data(endpoint: str, data: list): 
    url = SPRING_BOOT_BASE_URL + endpoint
    headers = {"Content-Type": "application/json"}
        
    for item in data:
        response = requests.post(url, data=json.dumps(item), headers=headers)
        
        if response.status_code not in [200, 201]:
            print(f'Error: {response.text}')

def main():
    post_data('/cars/', generate_cars())
    post_data('/parts/', generate_parts())
    post_data('/manufacturers/', generate_manufacturers())
    
if __name__ == '__main__':
    main()