from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect, Http404
from signup.forms import SignUpForm, LoginForm, MakeupForm
from django.http import HttpResponse
from .models import MakeupList, User, Accounts
from django.db import IntegrityError

from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


def validateEmail(email):
    from django.core.validators import validate_email
    from django.core.exceptions import ValidationError
    try:
        validate_email(email)
        return True
    except ValidationError:
        return False


def login_func(request):
    if request.method == 'POST':

        form = LoginForm(request.POST)

        if form.is_valid():
            # form.save()

            username_email = form.cleaned_data.get('email')

            if validateEmail(username_email):
                password = form.cleaned_data.get('password')
                user = authenticate(request, username=username_email, password=password)
                if user is not None and user.accounts.profile_category == "Makeup Artist":
                    login(request, user)
                    return redirect('signup:makeup_regis')
                else:
                    return HttpResponse("error logging in")
            else:
                return HttpResponse("email id not valid")
        else:
            return HttpResponse('Form is not valid')
    else:
        form = LoginForm()

    return render(request, 'signup/login.html', {'form': form})


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  # load the profile instance created by the signal

            user.accounts.phone_number = form.cleaned_data.get('phone_number')
            user.accounts.profile_category = form.cleaned_data.get('profile_category')
            # user.save()
            raw_password = form.cleaned_data.get('password1')

            if validateEmail(user.username):
                user.email = user.username
                user.save()
                user = authenticate(username=user.username, password=raw_password)
                if user is not None:
                    login(request, user)
                    return redirect('signup:login')
                else:
                    return redirect('myapp:signup')
            else:
                return HttpResponse("Invalid username")

    else:
        form = SignUpForm()
    return render(request, 'signup/signup.html', {'form': form})


def makeup_regis(request):
    if request.method == 'GET':
        template = 'signup/makeup3.html'
        user_name = request.user.first_name
        user_email = request.user.username
        # user_phone = Accounts.objects.order_by('-id')[0].phone_number
        user_phone = Accounts.objects.filter(phone_number=request.user.accounts.phone_number).first()
        print(user_phone)
        data = {'form': MakeupForm(), 'user_name': user_name, 'user_email': user_email, 'user_phone': user_phone}
        return render(request, template, data)
    elif request.method == 'POST':
        form = MakeupForm(request.POST)
        account_name = User.objects.order_by('-id')[0]
        account = Accounts.objects.order_by('-id')[0]
        if form.is_valid() and request.user.is_authenticated:
            fx = form.cleaned_data
            x = MakeupList(
                account=account,
                # account = request.user.username,
                name=fx['name'],
                email=account_name,
                contact_number=fx['contact_number'],
                dob=fx['dob'],
                gender=fx['gender'],
                location=fx['location'],
                category=fx['category'],
                instagram_username=fx['instagram_username'],
                instagram_followers=fx['instagram_followers'],
                twitter_username=fx['twitter_username'],
                twitter_followers=fx['twitter_followers'],
                facebook_username=fx['facebook_username'],
                facebook_followers=fx['facebook_followers'],
                youtube_username=fx['youtube_username'],
                youtube_followers=fx['youtube_followers'],
                linkedin_username=fx['linkedin_username'],
                linkedin_followers=fx['linkedin_followers'],
                snapchat_username=fx['snapchat_username'],
                snapchat_followers=fx['snapchat_followers'],
                pinterest_username=fx['pinterest_username'],
                pinterest_followers=fx['pinterest_followers'],
                tumbler_username=fx['tumbler_username'],
                tumbler_followers=fx['tumbler_followers'],
                github_username=fx['github_username'],
                github_followers=fx['github_followers'],
                dribble_username=fx['dribble_username'],
                dribble_followers=fx['dribble_followers'],
                reddit_username=fx['reddit_username'],
                reddit_followers=fx['reddit_followers'],
                weddingmakeup=fx['weddingmakeup'],
                clinicalmedicine=fx['clinicalmedicine'],
                facepaint=fx['facepaint'],
                filmsandmovie=fx['filmsandmovie'],
                influencermakeup=fx['influencermakeup'],
                skincare=fx['skincare'],
                bank_Full_Name=fx['bank_Full_Name'],
                bank_acccount_number=fx['bank_acccount_number'],
                bank_IFSC_code=fx['bank_IFSC_code'],
                paytm_Full_Name=fx['paytm_Full_Name'],
                paytm_Number=fx['paytm_Number'],
                gpay_Full_Name=fx['gpay_Full_Name'],
                gpay_Number=fx['gpay_Number'],
                upi_Full_Name=fx['upi_Full_Name'],
                upi_ID=fx['upi_ID'],
                sms_agency_name=fx['sms_agency_name'],
                sms_agent_name=fx['sms_agent_name'],
                sms_agent_email=fx['sms_agent_email'],
                sms_agent_number=fx['sms_agent_number'],
                free_assign_done=fx['free_assign_done'],
                free_no_experience=fx['free_no_experience'],
                free_date_assign=fx['free_date_assign'],
                ca_college_name=fx['ca_college_name'],
                ca_capacity=fx['ca_capacity'],
                ca_course=fx['ca_course'],
                ca_committee=fx['ca_committee'],
                ca_year_of_study=fx['ca_year_of_study'],
                ca_worked_hobnob=fx['ca_worked_hobnob'],
                wp_company_name=fx['wp_company_name'],
                wp_designation=fx['wp_designation'],
            )
            try:
                x.save()
            except IntegrityError:
                raise Http404("Integrity Error")
            else:
                return HttpResponse("MakeupArtist Created")
        else:
            template = 'signup/error.html'
            data = {'form_error': form, 'form_error_field': form.errors}
            return render(request, template, data)


