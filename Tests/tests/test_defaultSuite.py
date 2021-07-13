# Generated by Selenium IDE
import pytest
import time
import json
import boto3
import os
import selenium
from selenium import webdriver
from selenium.webdriver import DesiredCapabilities
from selenium.webdriver import Remote
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestDefaultSuite():
  def setup_method(self, method):
    devicefarm_client = boto3.client("devicefarm", region_name="us-west-2")
    testgrid_url_response = devicefarm_client.create_test_grid_url(projectArn=os.environ.get('DEVICE_POOL_ARN'),expiresInSeconds=300)

    desired_capabilities = DesiredCapabilities.FIREFOX
    desired_capabilities["platform"] = "windows"

    self.driver = Remote(testgrid_url_response["url"], desired_capabilities)
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_deepLinks(self):
    self.driver.get("https://" + os.environ.get('SITE_URL') + "/")
    self.driver.set_window_size(550, 691)
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the Demo Single Page App :)"
    self.driver.get("https://" + os.environ.get('SITE_URL') + "/about")
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the About page"
    self.driver.get("https://" + os.environ.get('SITE_URL') + "/contact")
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the Contact page"
  
  def test_navMenu(self):
    self.driver.get("https://" + os.environ.get('SITE_URL') + "/")
    self.driver.set_window_size(550, 691)
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the Demo Single Page App :)"
    self.driver.find_element(By.LINK_TEXT, "About").click()
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the About page"
    self.driver.find_element(By.LINK_TEXT, "Contact").click()
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Welcome to the Contact page"
    self.driver.find_element(By.LINK_TEXT, "Home").click()
  
