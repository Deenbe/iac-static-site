# AWS IaC SPA Demo
## Overview
This project is a demonstration of AWS capability for hosting single page applications on AWS.

## Technologies/Techniques leveraged and demonstrated
- Deployment Automation
  - Cloudformation
  - CodePipeline
  - CodeDeploy, and
  - CodeStar Connections (for connectivity to GitHub)
- Route53
- CloudFront
  - CloudFront Distribution
  - CloudFront S3 Origin
  - Custom Domain Names and SSL Termination
  - Origin Access Identities
  - CloudFront Functions
    - Request Processing for SPA required, and for header based rewrites
    - Response Processing for injection of headers (indicating which environment a user is seeing)
- Amazon Certificate Manager (ACM)
  - Generation and management of public site certificates
- Private S3 Buckets for serving public content
  - Cheap and secure hosting of static assets

## Dependencies
* You must have a public domain name setup and associated with your Isengard account

## Taking it for a spin
* Git clone this repo
* Deploy ./CloudFormation/cf_static_s3_site.yaml using CloudFormation
* Setup/activate the created CodeStar Connection via CodePipeline (CodePipeline > Settings > Connections)
* Release a change for both pipelines (they initially fail on creation due to the connection not being setup initially)
* Access the site using the CF Stack Output "SiteAddress"
* Make changes to the site code, push and merge to "test" branch
* Set a HTTP request header "app-version" = "test" to view your changes in test
* Merge to "live" branch and remove the HTTP header to view your changes in production
* Provide feedback to jonesaws@amazon.com 

## Cleanup
* Empty the Site S3 bucket created by the CF stack (CF Stack output "SiteS3BucketName")
* Empty the Asset S3 bucket created by the CF stack (CF Stack output "AssetS3BucketName")
* Delete the stack via CloudFormation
* Cleanup the ACM verification CNAME created in your Route53 Zone (frustratingly, that doesn't get cleaned up with the stack)
