import boto3
import os
from decimal import Decimal
import collections

def lambda_handler(event, context):

    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['DB_TABLE_NAME'])

    for run_event in event['events']:

        # DynamoDB doesn't support Python floats: https://github.com/boto/boto3/issues/534#issuecomment-191960592
        run_event = replace_floats(run_event)

        print("Inserting event: {}".format(run_event))

        table.put_item(
            Item=run_event
        )

def replace_floats(dict):
    """Recursively replaces all floats with decimal"""
    clone = {}
    for key, value in dict.items():
        if isinstance(value, collections.Mapping):
            clone[key] = replace_floats(value)
        elif isinstance(value, float):
            clone[key] = Decimal('{}'.format(dict[key]))
        else:
            clone[key] = value
    return clone
