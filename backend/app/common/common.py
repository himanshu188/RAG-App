from dotenv import load_dotenv
import os


load_dotenv()

service_name = os.environ.get("SERVICE_NAME", "hackathon app")
