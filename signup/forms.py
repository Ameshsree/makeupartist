from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import MakeupList


class SignUpForm(UserCreationForm):
    phone_number = forms.CharField()
    choices = (
        ('Influencer', 'Influencer'),
        ('Makeup Artist', 'Makeup Artist'),
        ('Photographer', 'Photographer')
    )
    profile_category = forms.ChoiceField(choices=choices)

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'phone_number', 'profile_category', 'first_name')
        labels = {
            'first_name': 'Name',
            'username': 'Email Address'
        }


class LoginForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('email', 'password')


class DateInput(forms.DateInput):
    input_type = 'date'


class MakeupForm(forms.ModelForm):
    class Meta:
        model = MakeupList
        exclude = ['account', 'email']
        fields = "__all__"
        labels = {
            'location': 'Address',
        }
        widgets = {
            'dob': DateInput(),
            'location': forms.TextInput(attrs={'placeholder': 'Location'}),
            'contact_number': forms.TextInput(attrs={'placeholder': 'Mobile Number'}),
            'bank_Full_Name': forms.TextInput(attrs={'placeholder': "Account Holder's Full Name"}),
            'bank_acccount_number': forms.TextInput(attrs={'placeholder': 'Account Number'}),
            'bank_IFSC_code': forms.TextInput(attrs={'placeholder': 'IFSC code'}),
            'paytm_Full_Name': forms.TextInput(attrs={'placeholder': 'Full Name'}),
            'paytm_Number': forms.TextInput(attrs={'placeholder': 'Paytm Number'}),
            'gpay_Full_Name': forms.TextInput(attrs={'placeholder': 'Full Name'}),
            'gpay_Number': forms.TextInput(attrs={'placeholder': 'Gpay Number'}),
            'upi_Full_Name': forms.TextInput(attrs={'placeholder': 'Full Name'}),
            'upi_ID': forms.TextInput(attrs={'placeholder': 'UPI ID'}),
            'sms_agency_name': forms.TextInput(attrs={'placeholder': 'Agency Name'}),
            'sms_agent_name': forms.TextInput(attrs={'placeholder': 'Agent Name'}),
            'sms_agent_email': forms.EmailInput(attrs={'placeholder': 'Your Agent Email ID'}),
            'sms_agent_number': forms.TextInput(attrs={'placeholder': 'Agent Number'}),
            'free_assign_done': forms.TextInput(attrs={'placeholder': 'No of Assignments Done'}),
            'free_no_experience': forms.TextInput(attrs={'placeholder': 'No of years of experience'}),
            'free_date_assign': forms.TextInput(attrs={'placeholder': 'Date of Last Assignment'}),
            'ca_college_name': forms.TextInput(attrs={'placeholder': 'College Name'}),
            'ca_capacity': forms.TextInput(attrs={'placeholder': 'What capacity were/are you involved'}),
            'ca_committee': forms.TextInput(attrs={'placeholder': 'Which committees/societies'}),
            'ca_course': forms.TextInput(attrs={'placeholder': 'Course'}),
            'ca_worked_hobnob': forms.TextInput(attrs={'placeholder': 'Have You Worked with Hobnob'}),
            'wp_company_name': forms.TextInput(attrs={'placeholder': 'Company Name'}),
            'wp_designation': forms.TextInput(attrs={'placeholder': 'Designation'}),
        }

    def __str__(self):
        self.email = User.objects.order_by('-id')[0].email
