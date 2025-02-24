---
slug: /iaas
sidebar_position: 2
---

# راهنمای بخش سرور  ابری
 
## صفحه اصلی

![iaas](/img/server/iaas.png)

## سرورها
در این بخش می‌توانید برای ساخت ماشین مجازی اقدام کنید.
 در ادامه راجع به نحوه ساخت ماشین، نحوه ساخت دیسک، نحوه ایجاد اسنپ‌شات و نیز ایجاد کلید توضیح می‌دهیم.

### ماشین‌های ابری من

![iaas](/img/server/iaas1.png)

برای ساخت ماشین، گزینه ساخت ماشین را انتخاب کنید. موارد زیر را به ترتیب مشاهده می‌کنید. 

![iaas](/img/server/iaas2.png)

در بخش جزئیات می‌توانید تعیین کنید ماشین مورد نظر باید از روی یک سیستم عامل و یا یک snapshot ایجاد شود. همچنین میزان منابع تخصیص داده‌شده را تعیین می‌کنید.

![iaas](/img/server/iaas3.png)

در بخش تنظیمات شبکه انتخاب می‌کنید ماشین مورد نظر باید در کدام شبکه قرار داشته باشد.
توجه: در صورتیکه میخواهید از یک شبکه دلخواه استفاده کنید باید از طریق بخش شبکه‌ها آن را بسازید.

![iaas](/img/server/iaas4.png)

در بخش دسترسی و امنیت می‌توانید کلید بسازید و کلید عمومی را در ماشین مربوطه قرار دهید.
توجه: در صورتیکه میخواهید از یک فایروال دلخواه استفاده کنید باید از طریق قسمت فایروال آن را ایجاد کنید.

![iaas](/img/server/iaas5.png)
در بخش روش پرداخت نوع بسته را انتخاب کنید.
با انتخاب گزینه راه‌اندازی، فرآیند ساخت ماشین مجازی آغاز می‌شود.
توجه: کاربر پیش‌فرض root و پسورد پیش‌فرض 1 است.

<!-- 
### سیستم‌عامل‌ها

از طریق این بخش می‌توانید فایل‌های iso و یا img دلخواه را برای ساخت سیستم‌عامل آپلود کنید.

![iaas](/img/server/iaas6.png)

با انتخاب گزینه بارگذاری سیستم‌عامل، صفحه زیر را مشاهده خواهید کرد.

![iaas](/img/server/iaas7.png)
 -->

### دیسک‌ها
در این بخش می‌توانید دیسک‌های لازم را بسازید.

![iaas](/img/server/iaas8.png)

بعد از انتخاب گزینه ایجاد دیسک، صفحه زیر را مشاهده خواهید کرد.

![iaas](/img/server/iaas9.png)

### اسنپ‌شات‌ها

در این بخش می‌توانید اسنپ‌شات‌های ایجادشده را مشاهده کنید.

![iaas](/img/server/iaas10.png)

برای ایجاد اسنپ‌شات، از بخش سرور ابری، زیربخش ماشین‌های ابری من، گزینه گرفتن اسنپشات را انتخاب کنید.

![iaas](/img/server/iaas11.png)

### کلیدهای SSH

در این بخش می‌توانید کلیدهای SSH ایجاد کنید.

![iaas](/img/server/iaas12.png)

با نتخاب گزینه ساخت کلید SSH، صفحه زیر را خواهید دید.

![iaas](/img/server/iaas13.png)

همچنین می‌توانید کلید SSH خود را بارگذاری کنید.

![iaas](/img/server/iaas14.png)
![iaas](/img/server/iaas14-1.png)


## شبکه

![iaas](/img/server/iaas15.png)

در این بخش می‌توانید شبکه‌های مورد نظر خود را بسازید.
 شبکه‌های مورد نظر خود را در دو نوع self-service و internet بسازید.
  هر کدام از این شبکه‌ها با هدف خاصی مورد استفاده قرار می‌گیرند که در ادامه به آن‌ها اشاره می‌کنیم.

### شبکه‌ها

شبکه‌های self-service از یکدیگر ایزوله هستند. البته با ایجاد روتر می‌توان میان آن‌ها ارتباط برقرار کرد.
 همچنین از شبکه internet برای اتصال به اینترنت استفاده می‌شود.

<!-- 
### روترها

با ایجاد router می‌توانید میان شبکه‌های مختلف ارتباط برقرار کنید.

![iaas](/img/server/iaas16.png)

هر router می‌تواند تعدادی interface داشته‌باشد و از طریق آن‌ها شبکه‌های مختلف را به یکدیگر ارتباط دهد.
 با انتخاب router مورد نظر می‌توانید interface های آن را ببینید. به شکل زیر توجه کنید:

![iaas](/img/server/iaas17.png)

با انتخاب گزینه اضافه کردن رابط شبکه می‌توانید interface های مورد نیاز را اضافه کنید:

![iaas](/img/server/iaas18.png)

توجه: بطور پیش‌فرض اولین IP از مجموعه IP های اختصاص داده‌شده برای شبکه مورد نظر، به interface مربوطه اختصاص داده می‌شود.
 به همین دلیل هنگام اتصال router های دیگر به یک شبکه، باید برای آن‌ها IP مشخصی انتخاب شود. 

توجه: پس از اتصال هر شبکه به اولین router، در همه ماشین‌های موجود در آن شبکه، بطور پیش‌فرض gateway برابر با IP اینترفیس آن روتر تنظیم خواهد شد. در صورتیکه چندین router به یک شبکه متصل است می‌توانید gateway دلخواه را برای ماشین‌های موجود در آن شبکه تنظیم کنید.
-->

### فایروال

این بخش در شکل زیر نشان داده شده‌است.

![iaas](/img/server/iaas19.png)

با انتخاب گزینه ایجاد فایروال، می‌توانید فایروال مورد نظر را ایجاد کنید.

![iaas](/img/server/iaas20.png)

همچنین با انتخاب گزینه مدیریت قوانین می‌توانید قوانین مورد نظر را برای فایروال ایجاد کنید.

![iaas](/img/server/iaas21.png)

![iaas](/img/server/iaas22.png)

### آدرس‌های IP شناور

در این بخش می‌توانید آدرس‌های IP-Public ایجاد کنید.

![iaas](/img/server/iaas23.png)


<!-- 
با انتخاب گزینه وابسته می‌توانید IP-Public تولیدشده را به ماشین مورد نظر اختصاص دهید.

![iaas](/img/server/iaas24.png)
-->


<!-- 
## فضای ابری

در این بخش از ذخیره‌ساز اشیاء openstack-swift بهره گرفته شده‌است. 

### صندوقچه‌ها

![iaas](/img/server/iaas25.png)

با انتخاب هر صندوقچه، مشخصات آن را مشاهده می‌کنید:

![iaas](/img/server/iaas26.png)

در داخل هر صندوقچه می‌توانید فولدر بسازید و یا فایل آپلود کنید.

![iaas](/img/server/iaas27.png)

### دسترسی API

در این بخش می‌توانید اطلاعات هویتی را بررسی کنید:

![iaas](/img/server/iaas28.png)

![iaas](/img/server/iaas29.png)

-->


