from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField


class Accounts(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=10)
    choices = (
        ('Influencer', 'Influencer'),
        ('Makeup Artist', 'Makeup Artist'),
        ('Photographer', 'Photographer')
    )

    profile_category = models.CharField(max_length=255, choices=choices)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Accounts.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.accounts.save()


class MakeupList(models.Model):
    account = models.OneToOneField(Accounts, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=False)
    email = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    contact_number = PhoneNumberField(null=False, blank=False, unique=True)
    dob = models.DateField(blank=False)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others')
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    location = models.CharField(max_length=50, blank=False)
    cat1 = "Social Media Markup Artist"
    cat2 = "Freelancer"
    cat3 = "Student"
    cat4 = "Working Professional"
    CATEGORY_CHOICES = (
        (cat1, "Social Media Markup Artist"), (cat2, "Freelancer"), (cat3, "Student"), (cat4, "Working Professional"))
    category = models.CharField(choices=CATEGORY_CHOICES, blank=False,  max_length=40)
    instagram_username = models.CharField(max_length=256, default="")
    instagram_followers = models.IntegerField(default=0)
    twitter_username = models.CharField(max_length=256, blank=True, null=True)
    twitter_followers = models.IntegerField(blank=True, null=True)
    facebook_username = models.CharField(max_length=256, blank=True, null=True)
    facebook_followers = models.IntegerField(blank=True, null=True)
    youtube_username = models.CharField(max_length=256, blank=True, null=True)
    youtube_followers = models.IntegerField(blank=True, null=True)
    linkedin_username = models.CharField(max_length=256, blank=True, null=True)
    linkedin_followers = models.IntegerField(blank=True, null=True)
    snapchat_username = models.CharField(max_length=256, blank=True, null=True)
    snapchat_followers = models.IntegerField(blank=True, null=True)
    pinterest_username = models.CharField(max_length=256, blank=True, null=True)
    pinterest_followers = models.IntegerField(blank=True, null=True)
    tumbler_username = models.CharField(max_length=256, blank=True, null=True)
    tumbler_followers = models.IntegerField(blank=True, null=True)
    github_username = models.CharField(max_length=256, blank=True, null=True)
    github_followers = models.IntegerField(blank=True, null=True)
    dribble_username = models.CharField(max_length=256, blank=True, null=True)
    dribble_followers = models.IntegerField(blank=True, null=True)
    reddit_username = models.CharField(max_length=256, blank=True, null=True)
    reddit_followers = models.IntegerField(blank=True, null=True)
    weddingmakeup = models.BooleanField(default=True)
    clinicalmedicine = models.BooleanField(default=False)
    facepaint = models.BooleanField(default=False)
    filmsandmovie = models.BooleanField(default=False)
    influencermakeup = models.BooleanField(default=False)
    skincare = models.BooleanField(default=False)
    bank_Full_Name = models.CharField(max_length=256, default="")
    bank_acccount_number = models.BigIntegerField()
    bank_IFSC_code = models.CharField(max_length=11, default="")
    paytm_Full_Name = models.CharField(max_length=256, blank=True, null=True)
    paytm_Number = models.IntegerField(blank=True, null=True)
    gpay_Full_Name = models.CharField(max_length=256, blank=True, null=True)
    gpay_Number = models.IntegerField(blank=True, null=True)
    upi_Full_Name = models.CharField(max_length=256, blank=True, null=True)
    upi_ID = models.CharField(max_length=60, blank=True, null=True)
    sms_agency_name = models.CharField(max_length=256, blank=True, null=True)
    sms_agent_name = models.CharField(max_length=256, blank=True, null=True)
    sms_agent_email = models.EmailField(blank=True, null=True)
    sms_agent_number = PhoneNumberField(blank=True, null=True)
    free_assign_done = models.CharField(blank=True, null=True, max_length=40)
    free_no_experience = models.CharField(blank=True, null=True, max_length=40)
    free_date_assign = models.CharField(blank=True, null=True, max_length=42)
    ca_college_name = models.CharField(blank=True, null=True, max_length=256)
    ca_capacity = models.CharField(blank=True, null=True, max_length=256)
    ca_course = models.CharField(blank=True, null=True, max_length=256)
    ca_committee = models.CharField(blank=True, null=True, max_length=256)
    YEAR_OF_STUDY = (("First Year", "First Year"), ("Second Year", "Second Year"), ("Third Year", "Third Year"),
                     ("Forth Year", "Forth Year"), ("Fifth Year", "Fifth Year"))
    ca_year_of_study = models.CharField(choices=YEAR_OF_STUDY, blank=True, null=True, max_length=100)
    ca_worked_hobnob = models.CharField(blank=True, null=True, max_length=45)
    wp_company_name = models.CharField(blank=True, null=True, max_length=256)
    wp_designation = models.CharField(blank=True, null=True, max_length=256)

    def __str__(self):
        return '{}\t{}'.format(self.name, self.category)
