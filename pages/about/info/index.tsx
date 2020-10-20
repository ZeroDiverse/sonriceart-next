import React from 'react'
import Footer from "../../../components/Footer/Footer";
import style from "./info.module.scss"
interface InfoProps {

}

export default function Info(props: InfoProps) {
    return (
        <>
            <main className={style.main}>
                <section>
                    <h2>INFO</h2>
                    <img className={style.infoImg} src={require("../../../public/images/1.webp")} />
                    <div className={style.infoContent}>
                        <h2 className="display-none">INFO</h2>
                        <p>
                            Son Rice is Co-Founder and Creative Director who is currently working at the creative agency
                            RAW
                            Studio
                            based in Hanoi, Vietnam.. Her fileds are Illustration - Concept art and 3D CGI.
                        </p>
                        <p>
                            Rice loved building up character and drawing her world as a kid. She got many awards for
                            painting
                            during
                            her
                            school days, typically the international Gold Prize for the National beauty drawing contest
                            held
                            in
                            Japan
                            2007. In addition to herinterest in painting, she also majored in Math at High School for
                            Gifted
                            Students
                            and studied piano at the Conservatory of Music at Hanoi. She started pursuing at Art and
                            Design
                            more
                            seriously at 18 and moved to University of Industrial Fine Art to study in Graphic Design.
                            By
                            19,
                            Rice
                            had
                            worked on her first feature film and game, as a character designer and then she applied to
                            FREAKY
                            MOTION
                            with REDCAT MOTION to pursuing 2D and 3D CGI.
                        </p>
                        <p>
                            A while after, she took a break to try her hand at making commercial video and CGI films and
                            find a
                            team
                            to
                            establish RAW Studio. RAW Studio is a creative animation studio which design and delivers 3D
                            and
                            2D
                            Animation - Motion graphic and VFX for Films, Television Commercials, Games, Events,... Her
                            first
                            RAW
                            project is LONTA | THE YEAR OF PIG 2019 which was successfully funded on Saigoneer in
                            Feb,2019
                            and
                            exhibited
                            in Halography 2019. A few months later, she created the AR illustration book project - Thánh
                            Gióng
                            (Saint
                            Giong), which is the first project of Vietnamese fairy tales using augmented reality
                            technology
                            in
                            Vietnam
                            and achieved much success.
                        </p>
                        <p>
                            “I can’t stop my imagine, so i wan to make more and more art
                            stories and project for my live. Is that so convetous? Don’t mind.
                            JUST DRAW IF YOU WANT!”
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Publications / Exhibition</h2>
                    <img className={style.infoImg} src={require("../../../public/images/thanh-giong.webp")} />
                    <div className={style.infoContent}>
                        <h2 className="display-none">Publications / Exhibition</h2>
                        <p>2007: Gold Prize for the “National beauty drawing contest” held in Japan</p>
                        <p>2008: Fourth Prize for the “ Global Children's painting competition” held in Japan</p>
                        <p>2010: Excellent Prize for the “Hanoi Color art contest” in Vietnam</p>
                        <p>2011: Excellent Prize for the “Festival of Children's National Supply” in Vietnam</p>
                        <p>2013: Sliver Prize for the “ Global Children's painting competition” held in China</p>
                        <p>2019: LONTA | THE YEAR OF PIG 2019 exhibited in Halography contest.</p>
                        <p>2020: AR Illustration book - Thánh Gióng, which is the first project of
                            Vietnamese fairy tales using augmented reality technology in Vietnam</p>
                    </div>
                </section>
                <section>
                    <h2>Partner / Cooperation</h2>
                    <img className={style.infoImg} src={require("../../../public/images/web.webp")} />
                    <div className={style.infoContent}>
                        <h2 className="display-none">Publications / Exhibition</h2>
                        <p>PIG WORKSHOP: pigworkshop.com</p>
                        <p>BULL Creative Studio: www.facebook.com/Bull.creative.studio</p>
                        <p>FREAKY MOTION: www.freakymotion.com</p>
                        <p>REDCAT MOTION: www.redcatmotion.com</p>
                        <p>BEEMOB Game Studio: www.beemob.vn</p>
                        <p>ECONOMIX Creative Agency: eonmix.com</p>
                        <p>SPEEDTEAM, 3D Mapping - Visual Effect Studio: speedteam.vn</p>
                        <p>VNPT: vnpt.com.vn</p>
                        <p>Lotus Vietnam: lotus.vn</p>
                    </div>
                </section>
                <section>
                    <h2>SOFTWARES</h2>
                    <img className={style.infoImg} src={require("../../../public/images/watch.webp")} />
                    <div className={`${style.infoContent} flex`}>
                        <h2 className="display-none">Publications / Exhibition</h2>
                        <div className={`${style.flexItem}`}>
                            <p>Photoshop</p>
                            <p>Illustrator</p>
                            <p>Adobe XD</p>
                            <p>Indesign</p>
                            <p>Clip Studio Paint</p>
                            <p>Manga Studio</p>
                            <p>Paint Tool SAI</p>
                            <p>Corel Painter</p>
                            <p>Sketchbook Pro</p>
                            <p>Art Rage</p>
                        </div>
                        <div className={style.flexItem}>
                            <p>Zbrush</p>
                            <p>Cinema 4D</p>
                            <p>Maya</p>
                            <p>Substance Painter</p>
                            <p>Substance Designer</p>
                            <p>Houdini</p>
                            <p>Maverlous Designer</p>
                            <p>Adobe Animated</p>
                            <p>After Effect</p>
                            <p>Premere</p>
                            <p>Redshfit</p>
                            <p>Arnold</p>
                            <p>xNorrmal</p>
                            <p>Marmoset</p>
                            <p>Keyshot</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
