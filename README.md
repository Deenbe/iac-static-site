# AWS IaC SPA Demo
## Overview
This project is a demonstration of AWS capability for hosting single page applications on AWS.

Sadly this template can only be deployed "as-is" in the us-east-1 region, as CloudFront requires ACM certs in that specific region.

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
* Release a change for the pipeline (they initially fail on creation due to the connection not being setup initially)
* Access the site using the CF Stack Output "TestSiteAddress"
* Make changes to the site code and push the "main" branch
* Monitor progress through CodePipeline, DeviceFarm and various other supporting services
* Access the live site using the CF Stack Output "LiveSiteAddress"
* Review testing results through CodeDeploy
* Provide feedback to jonesaws@amazon.com 

## Cleanup
* Empty the Site S3 bucket created by the CF stack (CF Stack output "SiteS3BucketName")
* Empty the Asset S3 bucket created by the CF stack (CF Stack output "AssetS3BucketName")
* Delete the stack via CloudFormation
* Cleanup the ACM verification CNAME created in your Route53 Zone(s) (frustratingly, they don't get cleaned up with the stack)
