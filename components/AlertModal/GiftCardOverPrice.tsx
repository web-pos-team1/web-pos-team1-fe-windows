import { Dispatch, SetStateAction } from "react";
import style from "./AlertModal.module.css";
import Image from 'next/image';

export default function GiftCardOverPrice(props:{show:boolean, onClose:Dispatch<SetStateAction<boolean>>}) {


    if(!props.show) return null
    
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <div className={style.body}>
                    <p>금액이 초과되어 사용할 수 없습니다</p>
                </div>
                <div className={style.footer}>
                    <button onClick={()=>props.onClose(false)}>
                        <Image
                            src="/images/checkPurple.png"
                            alt="confirm"
                            className={style.conirm}
                            width={28}
                            height={28}
                        />
                        <p>확인</p>
                        </button>
                </div>
            </div>
        </div>
    )
}