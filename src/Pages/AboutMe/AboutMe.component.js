import React from "react"
import {connect} from "react-redux";
import {motion} from "framer-motion";

import {setAboutMeData} from "../../Redux/actions/portfolio.action";
import style from "./AboutMe.module.scss"
import ComponentWithAnimation from "../../Hoc/componentWithAnimation";


class AboutMe extends React.Component {

    componentDidMount() {
        this.props.setAboutMeData()
    }

    render() {
        return (
            <>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}}
                            className={style.container}>
                    <div className={style.leftSide}>
                        <h2>About me</h2>
                    </div>

                    <div className={style.rightSide}>
                        Description
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores
                        consequuntur
                        distinctio doloremque eligendi harum maiores, perspiciatis quaerat recusandae saepe tempore unde
                        veniam, vitae voluptates. Ad dolorum impedit unde. Accusamus ad adipisci aliquam aspernatur
                        assumenda beatae commodi, debitis dolor earum eius eveniet expedita fugit incidunt laboriosam
                        laborum magnam nam natus nostrum nulla, officia optio quae quam quo reprehenderit ullam
                        veritatis,
                        vero vitae voluptatem voluptatibus voluptatum! Debitis deleniti, dignissimos dolorem doloribus
                        eius
                        explicabo fuga, ipsam molestias possimus praesentium quia ratione repellat sequi sint, tempora!
                        Ad
                        aspernatur distinctio modi pariatur perspiciatis quisquam ullam unde voluptatem. Amet eligendi
                        ipsa
                        nisi omnis, provident quis ratione? A architecto assumenda consectetur corporis cum debitis,
                        eaque
                        eligendi excepturi fugit illo inventore ipsam, iusto laborum minima minus, molestiae
                        necessitatibus
                        nemo non praesentium quod rem sunt tenetur ullam vel voluptate! Autem facere praesentium quidem
                        totam? Commodi consectetur consequatur, culpa et explicabo, fugiat fugit illum in laudantium
                        magnam
                        odio qui quia quisquam ullam veritatis vero voluptatem voluptates. At autem consectetur et fugit
                        laborum quas sequi ullam? Ab accusamus accusantium asperiores assumenda cum dolor dolores
                        inventore,
                        nam nesciunt non nostrum quisquam reiciendis reprehenderit! Accusamus ad assumenda beatae,
                        debitis,
                        dolores ducimus facilis id incidunt inventore ipsam libero magnam magni nam neque nisi odio quae
                        quia, quod repellat sapiente similique soluta unde velit! A animi consequuntur, dignissimos
                        dolores
                        eaque eius enim excepturi, explicabo hic itaque iure laboriosam laborum mollitia nobis non odit
                        rem
                        reprehenderit rerum temporibus voluptas. A aliquid aspernatur assumenda commodi cum cumque
                        delectus
                        deserunt, distinctio eligendi impedit iste iure libero magnam maxime minus molestias nemo
                        nesciunt
                        obcaecati optio perferendis perspiciatis qui quia repellat sapiente tenetur unde voluptate
                        voluptatum. A adipisci animi aspernatur assumenda dolores error eum exercitationem explicabo
                        harum
                        illum incidunt iste labore, laboriosam laborum magni nisi nobis officia perferendis perspiciatis
                        placeat qui quis quisquam quos veritatis voluptates. Beatae delectus est illo magnam nulla odio
                        veniam? Aliquid earum excepturi exercitationem harum libero, non omnis perferendis porro quas
                        qui
                        quidem recusandae reiciendis repellendus ut voluptatem. Animi corporis distinctio exercitationem
                        iusto magni officiis tempora vero. Consequatur cumque minima officiis rerum voluptatum. Corporis
                        dolore ea magni mollitia, nobis officia recusandae reiciendis rem. A ab cumque deserunt dolorem
                        dolores doloribus enim excepturi facere facilis fugiat hic laboriosam maxime nostrum odio
                        perferendis quas ratione, tempora vel veritatis, voluptatem? Consequatur cupiditate dolores ea
                        esse
                        et expedita id minus non officiis pariatur quaerat quidem quisquam ratione recusandae
                        repellendus
                        saepe sint sunt suscipit, totam, veritatis! Blanditiis distinctio dolores enim fugit illo
                        laborum
                        maiores quod? Accusantium adipisci corporis cum dicta ipsa, nihil repellendus reprehenderit. Ab
                        asperiores dolor dolorum itaque nisi non placeat possimus vitae. Adipisci architecto doloribus
                        et
                        facilis fuga libero, minima modi quas ratione? A adipisci, asperiores ducimus expedita impedit
                        magnam maiores omnis reiciendis soluta. Consequatur culpa dignissimos distinctio dolores ex fuga
                        molestias neque nihil numquam porro qui reiciendis, totam voluptates. Ad amet aperiam asperiores
                        aut
                        corporis debitis, delectus dicta dolore, eligendi eveniet excepturi explicabo facere facilis
                        illum
                        magni necessitatibus non nulla odio quidem quo repellendus reprehenderit, saepe tempore
                        temporibus
                        voluptatem. Autem consequuntur cupiditate deleniti facilis fugiat placeat porro provident quo
                        soluta
                        voluptates. Amet assumenda consequatur cupiditate debitis deserunt dicta dignissimos distinctio,
                        dolor dolore doloribus earum eligendi eveniet expedita, facere ipsum itaque labore minus
                        molestiae
                        natus necessitatibus neque nostrum numquam obcaecati officia officiis quam quas quidem quo
                        ratione
                        repellendus reprehenderit repudiandae, similique sunt temporibus tenetur ut voluptatum. Dolores
                        earum laborum maiores molestiae natus nihil omnis suscipit vel vitae voluptatibus! Assumenda
                        excepturi molestias necessitatibus nostrum officia quos tempore veniam? Alias, animi dignissimos
                        dolorem est eum, id iure, magnam non nostrum nulla omnis porro quibusdam reiciendis tempore
                        temporibus totam vero voluptatibus! Corporis culpa cumque dolor doloribus error esse inventore
                        ipsum
                        minima natus, neque nisi non quos repudiandae saepe voluptas! Ab aut deleniti est facere magnam
                        nisi
                        numquam officia, pariatur quos repudiandae. Esse omnis recusandae repellendus? At, ipsum,
                        molestias.
                        Impedit nam nisi vitae voluptates. Impedit nemo qui quibusdam repudiandae suscipit. A commodi
                        fugiat
                        modi, molestias nihil nisi porro sed veritatis voluptates. Ad autem cumque dolorem eaque eos
                        harum
                        minima necessitatibus pariatur possimus quia, quo rem sint tempora. Ab accusamus, assumenda
                        dignissimos dolores eaque minus modi voluptates voluptatibus. Aliquid amet aspernatur commodi
                        delectus deleniti dicta dignissimos dolor doloremque et fuga id iusto minima nisi odit omnis,
                        pariatur perferendis possimus quaerat reprehenderit ullam. At aut cumque debitis dolorum
                        ducimus,
                        enim est et eum eveniet illo iure labore magnam magni maiores maxime, minima minus natus nihil
                        non
                        pariatur quis quisquam reiciendis repellat repellendus repudiandae tempora tenetur veritatis. Ad
                        doloribus itaque nam, quas repellat sapiente vitae? Aperiam autem blanditiis debitis ea enim
                        esse
                        eveniet inventore recusandae repellendus sed? A amet beatae consectetur cum dignissimos
                        distinctio
                        dolores, exercitationem facilis fugit id inventore laboriosam maiores maxime minima minus modi
                        mollitia officiis pariatur, perferendis quam quod reprehenderit repudiandae sed similique
                        tempora
                        velit voluptas voluptatem? Asperiores, aspernatur expedita. Cupiditate deleniti ex fugiat illo,
                        quam
                        similique voluptas voluptate voluptatum! Ab architecto debitis ipsum necessitatibus? Amet autem
                        ex
                        expedita impedit ipsum odio quisquam sunt vero voluptatum. Corporis debitis dolor dolorum iusto
                        laudantium nam odit officiis praesentium vero! A ad asperiores at debitis dolore dolorem eaque
                        earum
                        eum eveniet, ipsum iure nam neque nostrum odio possimus quia quibusdam reprehenderit temporibus
                        velit vitae. Ab accusamus aut beatae dolore, dolorem eos error est et ex, fuga illo, ipsa iure
                        laudantium libero mollitia nam natus non pariatur perferendis perspiciatis quos reiciendis
                        tempore
                        unde ut velit vero voluptatum. A accusamus aut beatae blanditiis delectus dicta doloremque,
                        dolorum
                        eligendi esse eum iusto laudantium, maiores modi molestias nisi nobis perspiciatis, placeat quas
                        reprehenderit repudiandae rerum sit voluptatem! Ab, consectetur eligendi facere ipsum possimus
                        quam!
                        Consequuntur corporis, eaque eos eum eveniet in iure molestiae nam nesciunt quia similique
                        temporibus vero voluptatum! Aperiam, cum delectus eum expedita molestias necessitatibus nesciunt
                        obcaecati porro quod repudiandae. Alias cum cumque deleniti, doloremque, eius, explicabo fuga
                        illo
                        iste libero mollitia nisi perspiciatis placeat provident qui quibusdam rerum sed similique
                        suscipit
                        temporibus voluptatibus. Ad architecto at consequuntur corporis debitis eaque facere fugit,
                        labore
                        minus mollitia nemo neque, nihil nobis nulla perferendis quaerat suscipit, ullam veritatis vitae
                        voluptatibus. Ab delectus eveniet itaque nobis nulla officiis ut!
                    </div>
                </motion.div>
            </>
        )

    }

}

const mapStateToProps = (state) => ({
    aboutMe: state.aboutMe
})

const mapDispatchToProps = (dispatch) => ({
    setAboutMeData: () => dispatch(setAboutMeData())
})

export default ComponentWithAnimation(connect(mapStateToProps, mapDispatchToProps)(AboutMe))