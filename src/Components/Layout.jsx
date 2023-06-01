import React, { useState } from "react";
import LogoutModal from "./LogoutModal";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  return (
    <div className=" pt-5 bg-[#0c0b0b] flex flex-col w-full min-h-full h-fit">
      <div className="lg:pl-64 w-full bg-[#191919] p-3 flex justify-around items-center">
        <div className="w-4/5 justify-between flex items-center">
          <h3 className="font-be-jost-pro font-bold text-4xl text-[#FBB033] cursor-default">
            Hello Smaran!
          </h3>
          <p
            className="font-be-jost-pro font-semibold text-sm text-[#FBB033] cursor-pointer"
            onClick={handleLogout}
          >
            Smaran U.
          </p>
        </div>
      </div>
      <div className="p-5 lg:ml-72 h-full">
        {children}
        {/* <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          dolores, labore quia enim vitae, cupiditate amet harum quibusdam,
          dicta assumenda illum laudantium nihil! Ipsam, veritatis repudiandae
          voluptatem natus vero nostrum esse libero eaque placeat odio dicta
          sequi fugit vitae obcaecati eligendi exercitationem doloremque minus
          accusantium aspernatur eveniet veniam debitis officia? In cumque
          corporis fugiat reprehenderit fuga quo labore nihil tempore inventore
          dolore. Dolor architecto tempora laudantium aliquam saepe illum labore
          nulla, vero soluta quod. Fugit, culpa voluptatum. Minima ratione
          voluptatem, aspernatur ipsum porro, voluptates vero rerum dolorum
          distinctio recusandae culpa impedit possimus? Non et unde, explicabo
          odit possimus omnis consequatur? Dolor consequatur, nobis voluptates
          quae libero aut molestiae. Modi animi ut obcaecati, autem maxime
          fugiat ducimus consequatur deleniti nam commodi temporibus dolores ab
          tempore dolorum doloremque voluptatum enim saepe quaerat repellat
          porro iure aspernatur! Assumenda temporibus sint nesciunt nulla
          sapiente laboriosam deserunt incidunt, accusamus sit quisquam rem
          libero saepe provident cumque blanditiis necessitatibus alias
          consequatur ab sed aut quae expedita velit animi? Error aliquid iure
          alias numquam libero impedit. Sequi illo rem inventore repudiandae
          iste consectetur minima dolores hic cumque eius error, sunt, facilis
          voluptates non ex nulla molestiae pariatur? Reprehenderit voluptate
          enim sint vitae assumenda. Corrupti cumque unde quasi nam, hic culpa
          doloremque tenetur quas saepe repellendus deleniti distinctio minima
          ratione itaque excepturi! Iure debitis, magni et similique impedit id
          enim. Laboriosam eius accusantium, atque cum unde nesciunt voluptatum
          aliquid. Deserunt tenetur consequuntur ipsa, nam eveniet nihil sit
          perspiciatis blanditiis! Mollitia delectus dolorem impedit tenetur,
          molestiae sunt, quibusdam sit vitae qui quam repellendus. Nulla
          cupiditate, odio in unde earum facere consectetur asperiores tenetur
          molestias, expedita perferendis dolore cumque similique blanditiis
          praesentium culpa fuga nihil illum, nobis quaerat magni natus.
          Expedita dicta facere ea quibusdam nam. Inventore, vitae accusantium?
          Ad, quae minima laborum mollitia officia maxime magni nihil earum,
          perspiciatis amet rerum, incidunt et unde. Fugiat, accusantium?
          Expedita quos ipsum, dolor perferendis temporibus non impedit, neque
          ad ipsa ea sit veritatis porro consequatur quis quae. Quis itaque
          minima rerum, unde dignissimos possimus facilis amet voluptatem
          repellendus, exercitationem incidunt praesentium magnam tempore, ipsum
          in? Molestias animi veniam blanditiis sit dolor voluptatum veritatis,
          quas laudantium ipsam illum sed accusantium distinctio earum magni
          iusto ab enim cupiditate quibusdam omnis maxime nam cumque expedita
          ducimus voluptatibus. Harum labore dicta dolorem aut quod quo, porro
          dolorum commodi, vel eligendi, animi est ratione deserunt provident
          eos amet esse similique ullam sunt. Harum, fugiat aut! Odit architecto
          corrupti tempora recusandae veritatis perspiciatis perferendis
          inventore maiores unde itaque non eaque, sit nam! Cumque molestias
          distinctio similique earum optio illo reiciendis inventore! Excepturi,
          fugit. Accusamus dolorum doloribus architecto corporis modi, animi
          nesciunt laboriosam, vitae, nobis atque ab tempore totam quasi tempora
          laudantium quam reiciendis culpa in soluta illum velit voluptas
          debitis. Laudantium, natus. Laudantium mollitia ipsam velit pariatur
          aspernatur quae adipisci deserunt. Officiis laborum dolores pariatur
          esse in odio quisquam doloribus excepturi, sapiente vero harum
          obcaecati ipsam tenetur deserunt repudiandae neque fugiat possimus ea
          ipsum? Laborum animi neque provident aut nam omnis aperiam architecto
          ad quis quas quisquam officia saepe ducimus, deleniti quibusdam
          repellendus. Dignissimos quibusdam voluptates tempora recusandae,
          earum quia provident nobis repellat fuga ratione laudantium vero
          facere dolore iste consequuntur voluptate magni aperiam a delectus
          ducimus eveniet veritatis architecto sequi. Ut, et facere? Eligendi,
          deleniti possimus ex obcaecati deserunt nobis optio delectus aliquam
          voluptatibus non id culpa sint saepe enim laborum provident! Vitae
          fuga aliquid beatae amet illo quia veniam voluptate natus fugiat nulla
          at ducimus maiores modi, quibusdam aut itaque. Eveniet nisi sapiente
          dicta quos illo, quae eum aliquid nihil porro, minima, maiores illum
          atque commodi corrupti unde est eius voluptas dolorem molestiae
          veritatis fuga! Non labore adipisci obcaecati perferendis debitis sit,
          nostrum optio, error doloribus in atque, omnis modi minima quas eaque?
          Rem, repudiandae ad dolor molestiae cum modi cumque a, beatae nostrum
          nulla distinctio quidem eligendi. Ipsam est impedit ab quae doloremque
          amet in facere alias enim, consectetur incidunt nihil unde asperiores
          reprehenderit ratione nemo ex voluptates quibusdam consequuntur
          suscipit? Fuga magni commodi eveniet porro, voluptatem odit modi
          placeat reiciendis, maxime laudantium molestias possimus adipisci
          tenetur sit cumque dolorem dignissimos aliquam impedit? Amet nostrum
          placeat delectus similique explicabo, enim exercitationem harum
          repellat corporis, architecto animi, aut facilis? Dolores tempora
          magnam cupiditate perferendis facere vel minima earum quaerat cum modi
          aspernatur porro alias consequatur aperiam tempore voluptates
          asperiores, sequi laborum? Necessitatibus hic nemo tenetur! Quaerat,
          amet? Officiis expedita possimus aliquam. Hic, consectetur ullam enim
          quod, distinctio rem alias qui eum nostrum, voluptatibus a mollitia
          consequatur obcaecati cumque consequuntur eligendi. Odit, sit
          praesentium amet quibusdam similique temporibus, ullam laborum esse
          dicta, excepturi enim inventore autem odio vero asperiores ad
          blanditiis culpa! Sit ipsa veniam distinctio illo voluptatum delectus
          consectetur nam unde quo veritatis placeat commodi molestias rerum
          repudiandae explicabo labore vero reiciendis quos, dignissimos ipsum!
          Dolorem reprehenderit impedit soluta sunt obcaecati eligendi aut
          sapiente placeat quas, praesentium fuga exercitationem id asperiores
          iure veritatis culpa iste, odit voluptatibus suscipit nihil possimus
          molestiae doloribus! Quas omnis, accusantium tempore ratione nobis
          est, aliquam voluptatibus quasi provident perferendis assumenda
          placeat ducimus iure corrupti? Aliquam minus neque sunt nostrum iusto
          corrupti cumque saepe, quia aspernatur id vel est tempora, ipsum
          impedit accusantium autem, nihil magnam harum similique explicabo. Eos
          magni doloremque voluptatem asperiores sapiente officiis quae rem
          pariatur, totam, qui nobis illum earum commodi? Dolor sequi et
          nesciunt blanditiis nobis labore vitae maxime inventore natus quisquam
          rerum, error sapiente amet, molestiae ut deserunt provident, tempora
          debitis officia excepturi voluptatum non. Sapiente a recusandae
          obcaecati laboriosam quos tempore necessitatibus autem commodi modi
          sed. Eos molestias cum ipsum! Ullam ipsam natus rem ea reiciendis sint
          quisquam ratione officia possimus a sunt, voluptas alias repudiandae
          expedita praesentium, dolorem architecto inventore neque. Esse
          explicabo maxime fuga ipsum dolor molestias velit itaque aliquam,
          provident ratione officiis commodi suscipit et architecto culpa
          sapiente eaque veniam molestiae aliquid. Quae animi officiis laborum
          eius esse, nihil saepe numquam debitis fuga, ratione ex sapiente
          repellat quibusdam repudiandae alias enim voluptatum rerum dolore
          maxime, recusandae vitae omnis quas provident? Porro, minus. Porro,
          architecto. Neque hic pariatur unde quae repudiandae laudantium
          veniam.
        </p> */}
      </div>
      {showModal && <LogoutModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Layout;
