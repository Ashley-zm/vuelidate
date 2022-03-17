# usually_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
#内置验证规则
● required: 需要非空数据。检查仅包含空格的空数组和字符串。

● maxLength:要求输入具有最大指定长度（包括最大值）。适用于数组。

● minLength:要求输入具有最小指定长度（包括最小值）。适用于数组。

● email: 接受有效的电子邮件地址。请记住，您仍然需要在服务器上进行仔细验证，因为无法发送验证电子邮件地址是否是真实的。

● between: 检查数字或日期是否在指定范围内。最小值和最大值都包括在内。

● ipAddress: 接受点分十进制表示形式的有效IPv4地址，如127.0.0.1。

● alpha: 只接受字母字符。

● alphaNum: 只接受字母数字。

● numeric: 只接受数字。

● sameAs: 检查给定属性是否相等。

● url: 只接受网址。

● or: 当至少有一个提供的验证器通过时通过。

● and: 所有提供的验证器都通过时通过。

● requiredIf: 仅当提供的属性或谓词为真时才需要非空数据。

● requiredUnless: 仅当提供的属性或谓词为假时才需要非空数据。

● minValue: 要求输入具有指定的最小数值或日期。

● maxValue: 要求输入具有指定的最大数值或日期。

![image](https://user-images.githubusercontent.com/46121989/158810987-a9507dca-844b-4f86-8c94-f0a60da75527.png)

