import { useTranslation } from 'react-i18next';
import ArticleCard from '~/components/ArticleCard/ArticleCard';
import ArticleInfo from '~/components/ArticleInfo/ArticleInfo';

export default function Home() {
  const { t } = useTranslation();
  const articleInfoData = {
    title: "Trung tâm thông tin về COVID-19",
    subtitle: "Những điều bạn cần biết về COVID-19 để bảo vệ bản thân và gia đình",
    content: [
      "Dịch COVID-19 đang trở thành chủ đề bàn luận của tất cả mọi người. Thông tin về loại vi-rút này và cách phòng tránh xuất hiện ở khắp mọi nơi. Nắm bắt thông tin xác thực là chìa khóa giúp bạn chuẩn bị đúng cách cũng như bảo vệ bản thân và những người thân yêu. UNICEF hợp tác cùng các chuyên gia hàng đầu thế giới nhằm cung cấp những thông tin kịp thời, chính xác và dễ hiểu về cách thức ngăn ngừa và ứng phó hiệu quả với dịch bệnh. Hãy truy cập những trang này để tìm hiểu thông tin.",
      "Hãy chú ý đến những nguồn thông tin chính thống như UNICEF hay Tổ chức Y tế Thế giới (WHO). UNICEF đảm bảo hoạt động 24/7 để chia sẻ thông tin tới tất cả mọi người, đặc biệt là những thông tin chính xác. Chúng tôi sẽ tiếp tục cập nhật những thông tin kịp thời về dịch bệnh, giáo dục và hướng dẫn về cách ứng phó.",
      "Hãy giúp chúng tôi chống lại tin giả về COVID-19, và chúng tôi sẽ tiếp tục cập nhật những thông tin kịp thời và chính xác để bảo vệ sức khỏe của bạn."
    ]
  };

  return (
    <div>
      <p>{t('start')} Home page</p>;
      {/* <ArticleCard
        title="Những sự thật quan trọng về vắc-xin phòng COVID-19"
        description="Chúng tôi đã thu thập thông tin mới nhất từ các chuyên gia để trả lời một số câu hỏi phổ biến nhất về vắc-xin COVID-19."
        imageUrl="/path/to/image.png" // You can use the actual path to your image
      /> */}

      <ArticleInfo
        title={articleInfoData.title}
        subtitle={articleInfoData.subtitle}
        content={articleInfoData.content}
      />
    </div>
  )
}
