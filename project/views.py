from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages
# Create your views here.
def home(request):    
        return render(request,'Fundoramain.html')
def login(request):
    if request.method=='POST':
        username=request.POST['fname']
        lname=request.POST['lname']
        emailid=request.POST['emailid']
        pwd=request.POST['pwd']
        cpwd=request.POST['cpwd']
        if pwd==cpwd:
            if User.objects.filter(username=username).exists():
                messages.info(request,"Username taken")
                return redirect('login.html')
            elif User.objects.filter(email=emailid).exists():
                messages.info(request,"Emailid taken")
                return redirect('login.html')
            else:
                user = User.objects.create_user(username=username,password=pwd,email=emailid,last_name=lname)
                user.save();
                print("user created")
                return redirect('Fundoramain.html')
        else:
            messages.info(request,"Password not matching!")
            return redirect('login.html')

    else:    
        return render(request,'login.html')
def signin(request):
    if request.method=='POST':
        emailid=request.POST['emailid']
        pwd=request.POST['pwd']

        user=auth.authenticate(email=emailid,password=pwd)
        
        if user is not None:
            auth.login(request,user)
            return redirect('Fundoramain.html')
        else:
            messages.info(request,"Invalid Credentials")
            return render(request,'login.html')
    else:
        return redirect('login.html')

