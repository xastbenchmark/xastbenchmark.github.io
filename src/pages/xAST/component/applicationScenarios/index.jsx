import { Divider, Button, Tooltip } from "antd"
import React, { useState } from "react"
import styles from "./index.less"
import "./index.less"
import CommunityTabs from "../tabs/index"

const Appscenrios = () => {

    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    const [canyuImgURl1, setCanyuImgURl1] = useState("/images/05参与贡献/常规样式/1.png")
    const [canyuImgURl2, setCanyuImgURl2] = useState("/images/05参与贡献/常规样式/2.png")
    const [canyuImgURl3, setCanyuImgURl3] = useState("/images/05参与贡献/常规样式/3.png")


    // 处理鼠标划入事件
    const handleMouseEnter = (index) => {
        if (index == 1) {
            setCanyuImgURl1("/images/05参与贡献/悬停样式/1.png")
        }
        if (index == 2) {
            setCanyuImgURl2("/images/05参与贡献/悬停样式/2.png")
        }
        if (index == 3) {
            setCanyuImgURl3("/images/05参与贡献/悬停样式/3.png")
        }
    };

    // 处理鼠标划出事件
    const handleMouseLeave = (index) => {
        if (index == 1) {
            setCanyuImgURl1("/images/05参与贡献/常规样式/1.png")
        }
        if (index == 2) {
            setCanyuImgURl2("/images/05参与贡献/常规样式/2.png")
        }
        if (index == 3) {
            setCanyuImgURl3("/images/05参与贡献/常规样式/3.png")
        }
    };
    const handleClick = () => {
        window.open("https://github.com/alipay/ant-application-security-testing-benchmark", "_blank")
    }




    return (
        <>
            <div style={{ backgroundColor: "#1E2639", height: "488px", color: "#fff", }}>
                <div className={styles.bannerContainer}>
                    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                        <div className={styles.bannerTextSection}>
                            <h1 className={styles.bannerHeading}> <span class="blueCap">A</span>pplication <span class="blueCap">S</span>ecurity <span class="blueCap">T</span>esting
                                Evaluation Criteria</h1>
                            <p className={styles.bannerSubHeading}>
                                针对应用安全测试领域（AST）缺乏有效衡量技术能力标准的业界痛点，
                                蚂蚁安全团队联合浙江大学网络空间安全学院的20余位专家学者，
                                共同设计了xAST评价体系及其测试样本套件Benchmark。
                            </p>
                            <Button type="primary" className={styles.bannerButton} onClick={handleClick} >Github {">"} </Button>
                        </div>

                    </div>


                    <div className={styles.bannerImageSection}>
                        <img src="/images/01头部/bannerFinal.png" alt="banner" />
                    </div>
                </div>
            </div>

            <div style={{ width: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginTop: "80px" }}>
                    <div class="scene-text">应用场景</div>
                </div>
                <div >
                    <div className={styles.appContainer}>
                        <div className={styles.appModule} style={{ backgroundColor: "#FFFAEA" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/01.png" alt="描述1" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>应用安全测试技术衡量</p>
                            </div>
                        </div>
                        <div className={styles.appModule} style={{ backgroundColor: "#F0F4FE" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/02.png" alt="描述2" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>指引应用安全测试技术发展方向</p>
                            </div>
                        </div>
                        <div className={styles.appModule} style={{ backgroundColor: "#E9FDFC" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/03.png" alt="描述3" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>辅助企业客户产品选型</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div>

                </div>
            </div>
            <div className="tecCard">
                <div style={{ textAlign: 'center' }}>
                    <div class="scene-text2">技术名片</div>
                </div>
                <div className={styles.tecContainer}>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/01.png" alt="技术1" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界首个评价体系驱动式
                                Benchmark</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/02.png" alt="技术2" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界首个面向工具视角
                                Benchmark </p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/03.png" alt="技术3" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>评价体系分层设计</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/04.png" alt="技术4" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>“体验报告”式结果，
                                细粒度可解释</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/05.png" alt="技术5" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界Benchmark交叉验证，
                                确保完整性 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: "80px" }}>
                <div class="scene-text"> <a className="communityLink" href="https://yuque.antfin-inc.com/product_sec/poxwxs/lt6asc1oino9ig1x?singleDoc# 《xAST开源社区组织架构》" target="_blank" rel="noopener noreferrer">社区组织架构</a></div>
            </div>
            <div class="communityIamge">
                <img src="/images/04社区组织架构/map.png" alt="" />
            </div>
            {/* <div class="communityTab"   >
                <div className="communityTabText">PMC（筹）</div>
                <div className="communityTabText">Develop Group（开发者社区）</div>
                <div className="communityTabText">User Group（用户社区）</div>
                <div>社区日常工作机制</div>
            </div> */}

            <CommunityTabs />

            <div className="canyuMap">
                <div style={{ marginTop: "80px" }}>
                    <div style={{ textAlign: 'center' }}>
                        <div class="scene-text2">参与贡献</div>
                    </div>
                </div>
                <div className={styles.parContainer}>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        <a href="https://github.com/alipay/ant-application-security-testing-benchmark/wiki/%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE#%E5%8F%82%E4%B8%8E%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3%E8%B4%A1%E7%8C%AE" target="_blank" rel="noopener noreferrer">
                            <img src={canyuImgURl1} alt="示例图片" class="canyu-image" />
                            <span class="canyu-text">参与评测</span></a>
                    </div>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        <a href="https://github.com/alipay/ant-application-security-testing-benchmark/wiki/%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE#%E5%8F%82%E4%B8%8E%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3%E8%B4%A1%E7%8C%AE" target="_blank" rel="noopener noreferrer">
                            <img src={canyuImgURl2} alt="示例图片" class="canyu-image" />
                            <span class="canyu-text"> 参与代码贡献</span>
                        </a>
                    </div>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)} >
                        <a href="https://github.com/alipay/ant-application-security-testing-benchmark/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer">
                            <img src={canyuImgURl3} alt="示例图片" class="canyu-image" />
                            <span class="canyu-text">行为准则</span>
                        </a>
                    </div>
                </div>
            </div>


            <div style={{ textAlign: 'center', marginTop: "80px", marginBottom: "50px" }}>
                <div class="scene-text">Maintainers</div>
            </div>
            <div class="avatar-container">
                {/* <img src="/images/08头像/1.png" alt="Circle Avatar" class="avatar-image" />
                <img src="/images/08头像/1.png" alt="Circle Avatar" class="avatar-image" /> */}
                <div >
                    {/* <img class="avatar" src="/images/08头像/01.png" alt="Profile Avatar" />
                    <img class="avatar" src="/images/08头像/02.png" alt="Profile Avatar" />
                    <img class="avatar" src="/images/08头像/03.png" alt="Profile Avatar" />
                    <img class="avatar" src="/images/08头像/04.png" alt="Profile Avatar" />
                    <img class="avatar" src="/images/08头像/05.png" alt="Profile Avatar" /> */}
                    <Tooltip title="alipaydeshui" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/121414736?v=4" alt="111" />
                    </Tooltip>
                    <Tooltip title="yulailailailai" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/129742517?s=400&u=0d8adee7fb629412fdba4b69680e69cafd047f8c&v=4" alt="" />
                    </Tooltip>
                    <Tooltip title="CC11001100" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/12819457?v=4" alt="" />
                    </Tooltip>
                    <Tooltip title="billzone0922" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/11770465?v=4" alt="" /></Tooltip>
                    <Tooltip title="AntJiuFo" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/131324870?s=400&u=fe5537f05f1fbbdc7518a10eff3bee34a3efc4fd&v=4" alt="" /></Tooltip>
                    <Tooltip title="phantom0301" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/14069502?v=4" alt="" /></Tooltip>
                    <Tooltip title="curryooo" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/118245688?v=4" alt="" /></Tooltip>
                    <Tooltip title="xuebibibibibi" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/129351704?v=4" alt="" /></Tooltip>
                    <Tooltip title="huawei1989" className="avatar">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/97117939?v=4" alt="" /></Tooltip>
                </div>
            </div>
            {/* </div> */}
            <div style={{
                backgroundImage: 'url("/images/huobanBGC.png")',
                backgroundSize: "contain"
            }}>
                <div style={{ textAlign: 'center', marginTop: "80px" }}>
                    <div class="scene-text">生态伙伴</div>
                </div>
                <div style={{ textAlign: 'center', marginTop: "16px", marginBottom: "44px", fontSize: "18px", color: "rgba(0, 0, 0, 0.45)" }}>排名不分先后</div>
                <div style={{ paddingBottom: "80px" }}>
                    <div class="huoban-container">
                        <div class="huoban-row">
                            <img src="/images/06生态伙伴/平切.png" alt="Image 1" class="huoban-image" />
                            <img src="/images/06生态伙伴/中国评测.png" alt="Image 1" class="huoban-image" />
                            <img src="/images/06生态伙伴/浙江大学.png" alt="Image 2" class="huoban-image" />
                            <img src="/images/06生态伙伴/开放.png" alt="Image 3" class="huoban-image" />
                        </div>
                        <div class="huoban-row">
                            <img src="/images/06生态伙伴/阿里巴巴.png" alt="Image 7" class="huoban-image" />
                            <img src="/images/06生态伙伴/科大.png" alt="Image 8" class="huoban-image" />
                            <img src="/images/06生态伙伴/水木.png" alt="Image 9" class="huoban-image" />
                            <img src="/images/06生态伙伴/蚂蚁.png" alt="Image 10" class="huoban-image" />
                        </div>
                        <div class="huoban-row">
                            <img src="/images/06生态伙伴/斗象.png" alt="Image 4" class="huoban-image" />
                            <img src="/images/06生态伙伴/统信.png" alt="Image 5" class="huoban-image" />
                            <img src="/images/06生态伙伴/蜚语科技.png" alt="Image 1" class="huoban-image" />

                        </div>
                    </div>
                </div>

            </div>
            <div class="footer">
                <div class="footer-container">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src="/images/07底部/bottomLogo.png" alt="Logo" />
                        </div>
                        <div class="footer-email">
                            <img src="/images/07底部/emailLogo.png" alt="Email Icon" class="footer-email-icon" />
                            <span class="footer-email-address">xast-contact@service.alipay.com</span>
                        </div>
                        <div class="footer-note">
                            <a className="linkBottom" href="#" >社区介绍</a>   <Divider type="vertical" style={{ backgroundColor: "#fff" }} />
                            <a className="linkBottom" href="https://www.yuque.com/u22090306/nxa79b" target="_blank" rel="noopener noreferrer">社区活动</a>
                            <Divider type="vertical" style={{ backgroundColor: "#fff" }} />
                            <a className="linkBottom" href="https://www.yuque.com/u22090306/nxa79b" target="_blank" rel="noopener noreferrer">评测报告</a>
                        </div>
                    </div>
                    <div class="footer-right">
                        <img src="/images/07底部/公众号.png" alt="QR Code 1" class="footer-qrcode" />
                        <img src="/images/07底部/交流群.png" alt="QR Code 2" class="footer-qrcode" />
                    </div>
                </div>
            </div>

        </>
    )
}


export { Appscenrios }