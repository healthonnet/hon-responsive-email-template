HON-Responsive-Email-Template
=============================

HON Responsive Email Template is a responsive with a minimalist style in
mind email template.

Demo
----

See the [demo](https://healthonnet.github.io/hon-responsive-email-template/)

Send Email
----------

Sign up for a [Mailgun](http://mailgun.com/) account. The free account will do
for 10k emails per month.

Update the file `test/config.json` with your sandbox domain and api key.


```json
{
  "api_key": "key-xxxxxxxxx",
  "domain": "domain names listed at your https://mailgun.com/app/domains"
}
```

Complete the file `test/send-mail.js` with a sender address and a list of
receivers. Then :

```bash
$ npm install
$ ./test/send-mail.js
```


Developer
---------

  * [William Belle](https://github.com/williambelle)

License
-------

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
