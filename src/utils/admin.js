import icons from "./icons"



const { AiFillEdit,
    IoPlayOutline,
    SiGoogleclassroom,
    GiPriceTag,
    BsPhoneVibrateFill,
    FaUserEdit, TiEdit } = icons;

export const toolAdmin = [

    {
        name: 'Tạo ưu đãi hấp dẫn',
        link: 'maneger/tao-uu-dai-hap-dan',
        icon: <GiPriceTag size={20} />,
        isCount:false,
        count:0
    },
    {
        name: 'Tin tức & sự kiện',
        link: '',
        icon: <TiEdit size={20} />,
        end: true,
        isCount:false,
        count:0
    },
    {
        name: 'Tạo lớp học & lịch học',
        link: 'maneger/tao-lop-hoc-lich-hoc',
        icon: <SiGoogleclassroom size={20} />,
        isCount:false,
        count:0
    },
    {
        name: 'Liên hệ & tư vấn',
        link: 'maneger/lien-he-tu-van',
        icon: <BsPhoneVibrateFill size={20} />,
        isCount:true,
        count:1
    },
    {
        name: 'Trang tuyển dụng',
        link: 'maneger/tuyen-dung',
        icon: <FaUserEdit size={20} />,
        isCount:true,
        count:2
    },
    {
        name: 'Video bài dự thi',
        link: 'maneger/video-du-thi',
        icon: <IoPlayOutline size={20} />,
        isCount:false,
        count:0
    }

]