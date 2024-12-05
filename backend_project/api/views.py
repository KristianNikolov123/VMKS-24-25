from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def echo_string(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            received_string = data.get('message', '')
            return JsonResponse({'response': received_string})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

    if request.method == 'GET':
        # Return a simple JSON response for GET requests
        return JsonResponse({'message': 'this is the echo endpoint!'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
