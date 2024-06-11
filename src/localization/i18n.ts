import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      start: 'Start',
      'app-title': 'The Disease Control and Prevention Agency',
      'app-address': 'Go Vap district Ho Chi Minh city',
      'common-or': 'Or',
      'common-second': 'seconds',
      intro:
        'The Disease Control and Prevention Agency (DC&PA) is dedicated to protecting public health by monitoring and reporting on diseases. Our mission is to collect and disseminate critical health information to safeguard our nation against health threats. Through comprehensive data analysis and timely communication, we aim to inform public health decisions and ensure a healthier future for all.',
      'error-page-not-found': 'OPPS..., PAGE NOT FOUND!',
      'error-back-home': 'Go back home',
      'error-sorry': 'Sorry, we couldn’t find the page you’re looking for.',
      gmail: 'dichbenh.info@gmail.com',
      mobile: '+1363-343-677',
      'sign-sign-in': 'Sign in',
      'sign-phone': 'Enter your phone',
      'sign-phone-title': 'Your phone',
      'sign-sign-up': 'Sign up',
      'sign-sign-out': 'Sign out',
      'sign-verify-otp': 'Verify OTP',
      'sign-verify': 'Verify',
      'sign-check-otp': 'Please check your message to get the OTP code',
      'sign-sign-in-otp': 'Sign in via OTP',
      'sign-dont-have-account': "Don't have an account?",
      'sign-dont-recieve-otp': "Don't recieve the OTP code?",
      'sign-send-again': 'Send again',
      'sign-30s': 'The OTP code will be send after',
      'sign-have-account': 'Already have an account?',
      'sign-register': 'Register your own account',
      password: 'Password',
      'forgot-password': 'Forgot password?',
      'confirm-password': 'Confirm password',
      'welcome-back': 'Welcome back!',
      'footer-follow-us': 'Follow us',
      'footer-info': 'Information',
      'footer-customer-sevice': 'Customer service',
      'footer-faq': 'FAQ',
      'footer-terms-condition': 'Terms of condition',
      'footer-privacy-policy': 'Privacy Policy',
      'footer-copyright': '© Copyright 2024 Team 15. All Rights Reserved.',
      'read-article': 'Read the article',
      'end-line': ''
    }
  },
  vi: {
    translation: {
      start: 'Bắt đầu',
      'app-title': 'The Disease Control and Prevention Agency',
      'app-address': 'quận Gò Vấp thành phố Hồ Chí Minh',
      'common-or': 'Hoặc',
      'common-second': 'giây',
      intro:
        'Cục Quản lý và Phòng ngừa Dịch bệnh (DC&PA) cam kết bảo vệ sức khỏe cộng đồng bằng cách theo dõi và báo cáo về các bệnh tật. Sứ mệnh của chúng tôi là thu thập và phổ biến thông tin sức khỏe quan trọng để bảo vệ quốc gia khỏi các mối đe dọa sức khỏe. Thông qua phân tích dữ liệu toàn diện và truyền thông kịp thời, chúng tôi nhằm mục đích cung cấp thông tin cho các quyết định về y tế công cộng và đảm bảo một tương lai khỏe mạnh hơn cho tất cả mọi người.',
      'error-page-not-found': 'OPPS..., KHÔNG TÌM THẤY TRANG!',
      'error-back-home': 'Trở về trang chủ',
      'error-sorry': 'Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.',
      gmail: 'dichbenh.info@gmail.com',
      mobile: '+1363-343-677',
      'sign-sign-in': 'Đăng nhập',
      'sign-phone': 'Nhập số điện thoại',
      'sign-phone-title': 'Số điện thoại',
      'sign-sign-up': 'Đăng ký',
      'sign-sign-out': 'Đăng xuất',
      'sign-verify-otp': 'Xác minh OTP',
      'sign-verify': 'Xác minh',
      'sign-check-otp': 'Vui lòng kiểm tra tin nhắn để lấy mã OTP',
      'sign-sign-in-otp': 'Đăng nhập bằng mã OTP',
      'sign-dont-have-account': 'Không có tài khoản?',
      'sign-dont-recieve-otp': 'Không nhận được mã OTP?',
      'sign-send-again': 'Gửi lại',
      'sign-30s': 'Mã OTP được gửi lại sau',
      'sign-have-account': 'Đã có tài khoản?',
      'sign-register': 'Đăng ký tài khoản cho riêng bạn',
      password: 'Mật khẩu',
      'forgot-password': 'Quên mật khẩu?',
      'confirm-password': 'Xác nhận mật khẩu',
      'welcome-back': 'Chào mừng trở lại!',
      'footer-follow-us': 'Theo dõi chúng tôi',
      'footer-info': 'Thông tin',
      'footer-customer-sevice': 'Chăm sóc khách hàng',
      'footer-faq': 'FAQ',
      'footer-terms-condition': 'Điều khoản',
      'footer-privacy-policy': 'Chính sách bảo mật',
      'footer-copyright': '© Copyright 2024 Team 15. All Rights Reserved.',
      'read-article': 'Đọc bài báo',
      'end-line': ''
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
