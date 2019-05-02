---
title: Documented decisions - why we use SOCKS proxy to connect to internal tools
---

# SOCKS proxy design

Some utilities, such as metrics dashboards, error reporting, and deployment
tools should not be made available to the public. While such a utility may lock
functionality behind a user login system, these vary among implementations and
may be vulnerable to exploits. Additionally, due to the difficulty of creating
subdomains for vets.gov, it may be problematic to host some of these utilities
when they do not support relative path installations.

The preferred solution is to host these systems on an internal network that
prevents public access. While the VA maintains an internal network, the vets.gov
team operates within the AWS environment. Installation of a utility like this on
the VA network would require additional authority to operate extensions,
a server within the VA, and mapping new connections from AWS to the VA. Since
these tools are for use exclusively by the vets.gov services installed within
AWS, utilizing the VA's internal network is both unnecessary, more complex,
time intensive, and would likely impact performance of the utility and
application requiring it.

To address this issue we've configured an internal DNS server which can be
accessed via a SOCKS proxy. The SOCKS proxy is a server on your local system
which tunnels HTTP and DNS traffic to a jumpbox on the vets.gov AWS network.
Once connected, a developer will have access to the `*.vetsgov-internal` TLD,
and can use their browser to connect to tools such as Sentry.

Internal systems will not require any modification to connectivity, and should
communicate with the utilities directly. They may use a `/etc/hosts` entry for
the corresponding `*.vetsgov-internal` address when necessary.