# API Failure Monitor & Auto-Recovery

An automated API and website monitoring workflow built using **n8n**. It periodically checks website availability, evaluates HTTP status codes, retries failed requests, and sends email alerts if the website continues to fail.

This project demonstrates workflow automation, HTTP request handling, conditional logic, error handling, retry mechanisms, and email notifications.

## Overview

Website downtime and server errors can affect user experience and application availability. Manually checking a website repeatedly is time-consuming.

This workflow automates the monitoring process by checking a website every five minutes. If the initial request fails, it retries the request. If the retry also fails, an email notification is sent to alert the owner.

## Features

* **Automated Monitoring:** Checks website availability every five minutes.
* **HTTP Status Validation:** Evaluates HTTP status codes to identify successful and unsuccessful responses.
* **Automatic Retry:** Retries the request if the initial check fails.
* **Email Notifications:** Sends an alert if the website remains unavailable after the retry.
* **Error Handling:** Handles unsuccessful HTTP responses and continues the workflow.
* **Execution Logging:** Records successful checks and recovery events in the n8n execution history.
* **Credential Security:** Keeps SMTP credentials out of the exported workflow file.

## Workflow Architecture

The workflow follows this sequence:

1. **Schedule Trigger** — Starts the monitoring process every five minutes.
2. **Check Website** — Sends an HTTP request to the configured website.
3. **Evaluate Status** — Evaluates the HTTP status code.
4. **Website Healthy?** — Routes execution based on the result.
5. **Log Success** — Records the successful check if the response status is between 200 and 299.
6. **Retry Website Check** — Retries the request if the initial check fails.
7. **Recovered After Retry?** — Evaluates the retry response.
8. **Log Recovery** — Records a successful recovery.
9. **Send Failure Alert** — Sends an email notification if both checks fail.

### Workflow Diagram

```text
Schedule Trigger
       |
       v
  Check Website
       |
       v
 Evaluate Status
       |
       v
 Website Healthy?
       |
       |--- YES ---> Log Success
       |
       |--- NO ----> Retry Website Check
                            |
                            v
                   Recovered After Retry?
                            |
                    +-------+-------+
                    |               |
                   YES              NO
                    |               |
                    v               v
               Log Recovery    Send Failure Alert
```

## Technologies Used

* **n8n** — Workflow automation platform
* **HTTP Request** — Website availability checks
* **Conditional Logic** — HTTP status evaluation and workflow routing
* **JavaScript** — Processing and recording monitoring results
* **SMTP** — Email notifications

## Configuration

### 1. Import the Workflow

1. Download or clone this repository.
2. Open your n8n instance.
3. Import `workflow/api-failure-monitor.json`.
4. Review the workflow nodes and connections.

### 2. Configure the Website URL

Open the HTTP Request nodes and replace the example website URL with the URL you want to monitor.

The current workflow is configured to monitor:

`https://track-your-progress-buddy.lovable.app`

### 3. Configure the Monitoring Interval

The Schedule Trigger is configured to run every five minutes.

You can change this interval based on your monitoring requirements.

### 4. Configure Email Notifications

To enable failure alerts:

1. Open the **Send Failure Alert** node.
2. Configure your sender and recipient email addresses.
3. Create or select an SMTP credential in n8n.
4. Update the email fields with your intended addresses.
5. Test the email configuration before activating the workflow.

**Security note:** Never commit SMTP passwords, app passwords, API keys, or other secrets to a public GitHub repository.

### 5. Activate the Workflow

Run the workflow manually first to verify the request, conditional branches, and email configuration.

Once testing is successful, activate the workflow to enable scheduled monitoring.

## Testing

Test the workflow under different conditions:

| Test Scenario                            | Expected Result                                                |
| ---------------------------------------- | -------------------------------------------------------------- |
| Website returns HTTP 200                 | Successful check is recorded                                   |
| Website returns another 2xx status       | Successful check is recorded                                   |
| Initial request fails but retry succeeds | Recovery event is recorded                                     |
| Both requests fail                       | Email alert is sent                                            |
| SMTP credentials are invalid             | Email notification may fail; inspect the n8n execution details |

To test the retry and alert paths, temporarily configure an invalid URL or another controlled failure scenario. Restore the correct URL after testing.

## Limitations

* The workflow checks HTTP status codes; it does not verify every application feature.
* A successful HTTP response does not necessarily mean the website's frontend, database, or business logic is functioning correctly.
* The retry mechanism performs one additional request, not unlimited retries.
* Email notifications depend on valid SMTP configuration and email service availability.
* Successful checks and recovery events are available in n8n execution history; persistent reporting would require a database, Data Table, or another storage solution.

## Security

This repository is intended to contain a sanitized workflow export.

* No SMTP passwords should be stored in the workflow JSON.
* Configure credentials directly in n8n.
* Review exported workflow files before committing them.
* Avoid committing private environment files, access tokens, or personal information.
* Replace instance-specific identifiers when necessary.

## Future Improvements

Potential enhancements include:

* Monitoring multiple websites and APIs.
* Tracking response time and availability percentage.
* Adding response-body validation.
* Implementing configurable retry delays and multiple retry attempts.
* Sending notifications through Slack or Telegram.
* Storing monitoring results in a database.
* Creating a dashboard for uptime and response-time analysis.
* Adding escalation rules for prolonged outages.

## Learning Outcomes

This project demonstrates practical experience with:

* Workflow automation using n8n.
* HTTP requests and status-code validation.
* Conditional branching.
* Retry logic and error handling.
* Email notification automation.
* JavaScript within automated workflows.
* Credential management and GitHub project documentation.

## License

This project is available for educational and portfolio purposes. Add a license file if you intend to specify permissions for reuse and distribution.
