import boto3
import os

def lambda_handler(event, context):

    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['DB_TABLE_NAME'])

    for event_id in event['events']:
        table.delete_item(Key={'@id': event_id})
