import logo from "../../../assets/img/bannerlogin.jpg"
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import logoCenter from "../../../assets/img/logo.png"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loading from "../../../assets/img/load.png"

function Login() {

    const navigate = useNavigate();
    const { isLoggedIn, isRegisted } = useSelector(state => state.auth)
    const [handle, setHandle] = useState(false)
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false)
    const [payload, setPayload] = useState({
        phone: '',
        name: '',
        password: ''
    })
    const [intaralValid, setIntaralValid] = useState([])

    useEffect(() => {
        isLoggedIn && toast.success('Đăng nhập thành công !')
        isLoggedIn && navigate('/')
    }, [isLoggedIn])


    useEffect(() => {
        isRegisted && toast.success('Đăng ký tài khoản thành công !')
        isRegisted && setIsLogin(false)
        setPayload({
            phone: '',
            name: '',
            password: ''
        })
    }, [isRegisted])

    const validate = (payload) => {
        let intaralValid = 0;

        const fieds = Object.entries(payload)

        fieds.forEach(item => {
            if (item[1] === '') {
                setIntaralValid(prev => [...prev, {
                    name: item[0],
                    msg: 'Không được phép để trống !'
                }])
                intaralValid++;
            }
        })

        fieds.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setIntaralValid(prev => [...prev, {
                            name: item[0],
                            msg: 'Mật khẩu tối thiểu là 6 kí tự !'
                        }])
                        intaralValid++;
                    }
                    break;
                case 'phone':
                    if (!+item[1] || item[1].length < 10) {
                        setIntaralValid(prev => [...prev, {
                            name: item[0],
                            msg: 'Số điện thoại không hợp lệ !'
                        }])
                        intaralValid++;
                    }
                    break;
                default:
                    break;
            }
        })

        return intaralValid;

    }
    const handleSubmit = () => {
        
        const fpayload = !isLogin ? {
            phone: payload.phone,
            password: payload.password
        } : payload
        const inter = validate(fpayload)
        if (!inter) {
            if (isLogin) {
                setHandle(true)
                setTimeout(() => {
                    setHandle(false)
                }, 5000)
                dispatch(actions.register(payload))

            } else {
                setHandle(true)
                setTimeout(() => {
                    setHandle(false)
                }, 5000)
                dispatch(actions.login(payload))
            }
        }



    }

    const handleKeyDown = (e) => {
        switch (e.which) {
            case 13:
                handleSubmit();
                break;
        
            default:
                break;
        }
        
    }


    return (<div className="w-full h-[100vh]">
        <img src={logo} className="w-full object-cover h-full relative" alt="logo" />
        <div className="absolute flex flex-col items-center top-[50%] translate-y-[-50%] right-[250px]">
            <div className="w-[160px] mb-3">
                <img className="w-full object-cover" src={logoCenter} alt="logo" />
            </div>
            <div className="w-[348px]  rounded-[20px]  bg-loginForm px-[37px] pt-[20px]">
                {isLogin && <InputForm onKeyDown={handleKeyDown} intaralValid={intaralValid} setIntaralValid={setIntaralValid} focus value={payload.name} setValue={setPayload} type={'name'} stylePrivate={'rounded-[20px] text-center bg-white border-2 border-[#dc3545] text-[#000]'} placehoder={'Username'} />}
                <InputForm onKeyDown={handleKeyDown} intaralValid={intaralValid} setIntaralValid={setIntaralValid} value={payload.phone} setValue={setPayload} type={'phone'} stylePrivate={'rounded-[20px] text-center bg-white border-2 border-[#dc3545] text-[#000]'} placehoder={'Phone'} />
                <InputForm onKeyDown={handleKeyDown} intaralValid={intaralValid} setIntaralValid={setIntaralValid} value={payload.password} setValue={setPayload} type={'password'} stylePrivate={'rounded-[20px] text-center bg-white border-2 border-[#dc3545]'} placehoder={'Password'} />
                <div className=" mt-[-15px] mb-[5px] text-center">
                    {!isLogin ? <span>
                        <input type="checkbox" className="accent-pink-500 mr-2 mt-3" />
                        Remember Username
                    </span> :
                        <p className="text-[12px] text-center font-semibold mt-2 mb-2 ">Bằng việc đăng ký bạn đã đồng ý với chúng tôi về việc bạn sẽ có 1 tài khoản</p>}
                </div>
                <Button stylePrivate={'bg-[#153e9a] rounded-[20px] text-white font-bold uppercase text-[18px]'}  onClick={handleSubmit} text={isLogin ? 'Register' : 'Login'} />
                {handle && <button type="button" className="flex w-full justify-center mt-2" disabled>
                    <img src={loading} viewBox="0 0 24 24" className="animate-spin h-5 w-5 mr-3 ..." alt="loading" />
                    <span className="text-[14px]">Đang xử lý ...</span>
                </button>}
                <div className="mt-[50px] w-full text-center text-[#153e9a]">------        OR        ------</div>
                <Button stylePrivate={'bg-[#fff] mt-[15px] mb-[20px] rounded-[20px] text-[#000] font-bold uppercase text-[18px]'} onClick={() => {
                    setIsLogin(prev => !prev)
                    setPayload({
                        phone: '',
                        name: '',
                        password: ''
                    })
                    setIntaralValid([])
                }

                } text={isLogin ? 'Login' : 'Register'} />
            </div>
        </div>
    </div>);
}

export default Login;