
# Internet Engineering Project
In this project, we had to implement a Front-end and Back-end of a simple website like https://www.torob.com \
React was used for Front and Go was used for Back.

در این پروژه، باید یک نمونه ی ساده از سایت ترب را از هر دو سمت فرانت اند و بک اند پیاده سازی می کردیم.\
از تکنولوژی های React.js در فرانت و  Go در سمت بک استفاده شده است.\
فایل صورت پروژه در کنار فایل Readme است.

### Build with:
* [HTML](https://html.com/)
* [Javascript](https://www.javascript.com/)
* [Reactjs](https://reactjs.org/)
* [Go](https://go.dev/)
* [MongoDB](https://www.mongodb.com/)

## Project parts
- Home page  
- Search results page 
- Product page
- User's profile page
- Store's profile page

##  Home page  

![Screenshot (1)](https://user-images.githubusercontent.com/95939538/176985727-ebc34503-b7f7-47d4-b82f-b381b360407d.png)
On this page, User can enter the registration or login section and sign up a new account or login to his/her account.\
Also, User can search for the desired product or select a category of products from the menus on the navbar of the page.

در این صفحه، کاربر میتواند وارد بخش ثبت نام یا ورود بشود و به حساب خود وارد شود یا حساب جدید بسازد.\
همچنین کاربر میتواند کالا مورد نظرش را جستجو کند یا از منو های بالای صفحه، دسته ای از کالا ها را انتخاب کند.

 \
  \
![Screenshot (2)](https://user-images.githubusercontent.com/95939538/176985926-a667e30b-0cb9-47a3-88be-2af94c0ec66e.png)
This is a Modal which appears after clicking on Sign up button in navbar.\
User can switch between sign-up and login modes by clicking on thw link under the sign up button.

این یک Modal است که بعد از کلیک بر روی دکمه‌ی ثبت نام در نوبار ظاهر میشود.\
کاربر میتواند با کلیک بر روی لینک زیر دکمه‌ی ثبت نام بین حالت های ثبت نام و ورود جا به جا شود.

## Search results page 
![Screenshot (270)](https://user-images.githubusercontent.com/95939538/177011061-e933c0e4-9d64-4b8b-b5ef-d058d8947883.png)
This page shows the results of the user's search or a category that the user asked for
User can choose other categories or apply a filter on the products or view the information of a product and add it to his favorite list.

این صفحه، نتایج جستجوی کاربر یا یک دسته بندی‌ای که کاربر خواسته را نشان میدهد.\
در این صفحه، کاربر میتواند دسته بندی های دیگر را انتخاب کند یا بر روی کالا ها فیلتر اعمال کند یا اطلاعات یک کالا را مشاهده کند و آنرا به لیست محبوب های خود اضافه کند.

## Product page
![photo_2022-07-03_18-25-54](https://user-images.githubusercontent.com/95939538/177043189-16128fe3-1fd7-4bc5-b0ba-e943518510ef.jpg)
This page shows the information of the product selected by User and the stores that offer it.
User can be transferred to the store page by clicking the "buy" button.
Also, User can file a violation report about a store by clicking the "report" button.

این صفحه، اطلاعات کالای انتخاب شده توسط کاربر و فروشگاه هایی که آن را عرضه میکنند را نشان میدهد.\
کاربر میتواند با کلیک بر دکمه ی خرید ،‌به صفحه ی فروشگاه منتقل بشود.\
همچنین کاربر میتواند  با کلیک بر دکمه ی گزارش، در مورد یک فروشگاه گزارش تخلف ثبت کند. 


## User's profile page
![photo_2022-07-03_18-26-01](https://user-images.githubusercontent.com/95939538/177043470-d94ddb58-776c-40bc-af5d-a23f2b4459a3.jpg)
![photo_2022-07-03_18-37-29](https://user-images.githubusercontent.com/95939538/177043479-2867b2b6-7a4d-4459-9379-07411ce61a3d.jpg)

These two pages show User's profile. There are two types of users: normal user and store owner\
On the profile page of a normal user(pic-2), there are only two lists of popular items and a list of recent views.\
On the store owner's profile page (pic-1), in addition to the previous lists, you can see the list of stores defined by the owner.

این دو صفحه، پروفایل کاربر را نشان میدهد.دو نوع کاربر وجود دارد:کاربر عادی و صاحب فروشگاه\
در صفحه ی پروفایل کاربر عادی(عکس دوم)، تنها دو لیست کالاهای محبوب و لیست بازدید های اخیر وجود دارند.\
در صفحه ی پروفایل صاحب فروشگاه(عکس اول)، علاوه بر دو لیست قبلی، میتوان لیست فروشگاه های تعریف شده توسط صاحب را مشاهده کرد. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
