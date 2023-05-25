import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const AdminDashboard = () => {
  const location = useLocation();
  return (
    <>
      <div className=" font-lexend border-b-2 h-20 border-[#E0E0E0]">
        <div className="Navbar">
          <div
            style={{ width: "120px" }}
            className="fixed h-full bg-[#191919] md:flex flex-col hidden border-r-2 border-[#E0E0E0]"
          >
            <div>
              <div className="flex flex-col w-full justify-center items-center py-4 mb-8  cursor-pointer">
                <img src="/assets/Logo1.png" alt="not found" />
              </div>
            </div>

            <Link href="/dashboard">
              {location.pathname === "/dashboard" ? (
                <div
                  className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <IoHomeSharp className="text-[#5D5FEF]" /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Home
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer">
                  {/* <IoHomeSharp className="text-white opacity-100 group-hover:text-black group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-black group-hover:opacity-100">
                    Home
                  </div>
                </div>
              )}
            </Link>

            <Link href="/payments">
              {location.pathname === "/payments" ? (
                <div
                  className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <FaWallet className="text-[#1D1E5E]" /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Payments
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer">
                  {/* <FaWallet className=" text-white opacity-100 group-hover:text-[#1D1E5E] group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-[#1D1E5E] group-hover:opacity-100">
                    Payments
                  </div>
                </div>
              )}
            </Link>

            <Link href="/request">
              {location.pathname === "/request" ? (
                <div
                  className="flex flex-col w-full justify-center items-center mb-2 py-4 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <FaEnvelope className="text-[#1D1E5E] " /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Requests
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div className="group flex flex-col w-full justify-center mb-2 items-center py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer">
                  {/* <FaEnvelope className="text-white opacity-100 group-hover:text-[#1D1E5E] group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-[#1D1E5E] group-hover:opacity-100">
                    Requests
                  </div>
                </div>
              )}
            </Link>

            <Link href="/amenities">
              {location.pathname.startsWith("/amenities") ? (
                <div
                  className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <FaTableTennis className="text-[#1D1E5E] " /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Amenities
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <FaTableTennis className="text-white opacity-100 group-hover:text-[#1D1E5E] group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-[#1D1E5E] group-hover:opacity-100">
                    Amenities
                  </div>
                </div>
              )}
            </Link>

            <Link href="/community">
              {location.pathname === "/community" ? (
                <div
                  className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <IoIosPeople className="text-indigo-900" /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Community
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div className="group flex flex-col w-full justify-center mb-2 items-center py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer">
                  {/* <IoIosPeople className="text-white opacity-100 group-hover:text-[#1D1E5E] group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-[#1D1E5E] group-hover:opacity-100">
                    Community
                  </div>
                </div>
              )}
            </Link>

            <Link href="/contact">
              {location.pathname === "/contact" ? (
                <div
                  className="flex flex-col w-full justify-center mb-2 items-center py-4 bg-white cursor-pointer"
                  style={{ position: "relative" }}
                >
                  {/* <IoChatbubbles className="text-indigo-900" /> */}
                  <div className="text-[#1D1E5E] font-lexend text-sm font-semibold">
                    Contact
                  </div>
                  <div
                    style={{
                      borderLeft: "4px solid #5D5FEF",
                      borderRadius: 8,
                      position: "absolute",
                      top: "8%",
                      bottom: "11%",
                      right: "0",
                    }}
                  />
                </div>
              ) : (
                <div className="group flex flex-col w-full mb-2 justify-center items-center py-4 bg-[#1D1E5E] hover:bg-white cursor-pointer">
                  {/* <IoChatbubbles className="text-white opacity-100 group-hover:text-[#1D1E5E] group-hover:opacity-100" /> */}
                  <div className="font-lexend text-sm text-white opacity-100 font-semibold group-hover:text-[#1D1E5E] group-hover:opacity-100">
                    Contact
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>

        <div className={` border-b-2 border-[#E0E0E0]`}>
          <div className={` bg-white`}>
            <div>
              <img src="/assets/Search.png" alt="" />
            </div>
            <input
              type="text"
              className={` bg-white`}
              placeholder="Search for bill payments, amenities, contacts"
            ></input>
          </div>

          {/* <div className={styles.select}>
                        <select className={styles.atHome}>
                            <oipton
                                className={styles.option} value="0">
                                At Home</option>
                            <option className={styles.option} value="1">Not At Home</option>
                        </select>
    
                    </div> */}
          {/* <div className={`${styles.select}`}>
          <Select
            value={memberProfile?.atHome ? "home" : "not-home"}
            style={{
              width: 240,
              borderColor: "#979797",
              borderWidth: 1,
              borderStyle: "solid",
              display: "flex",
              alignItems: "center",
            }}
            dropdownStyle={{ padding: 8 }}
            bordered={false}
            className={styles.atHome}
            suffixIcon={
              <DownOutlined style={{ color: "rgba(93, 95, 239, 1)" }} />
            }
            onChange={(e) => {
              console.log(e);
              let atHome = e == "home";
              setMemberProfile({ ...memberProfile, atHome: atHome });
              updateHomeStatus(atHome);
            }}
            // dropdownMatchSelectWidth={350}
          >
            <Option value="home">
              <Row style={{ width: "100%" }} gutter={[8, 16]} align="middle">
                <Col>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "rgba(145, 221, 133, 1)",
                    }}
                  ></div>
                </Col>
                <Col className="font-lexend font-semibold ">At Home</Col>
              </Row>
            </Option>
            <Option value="not-home">
              <Row style={{ width: "100%" }} gutter={[8, 16]} align="middle">
                <Col>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "rgba(196,196,196,1)",
                    }}
                  ></div>
                </Col>
                <Col className="font-lexend font-semibold ">Not at Home</Col>
              </Row>
              <Row
                style={{ width: "100%", marginTop: 4 }}
                gutter={[8, 16]}
                align="middle"
              >
                <Col offset={1}>
                  <Text className="text-xs font-normal text-gray-800">
                    All your parcels will be kept at the
                    <br /> front desk till you are back home. <br />
                    Please ensure that the parcels are
                    <br />
                    <strong>not food items.</strong>
                  </Text>
                </Col>
              </Row>
            </Option>
          </Select>
        </div> */}
          {/* <div>
          <a href="/emergency">
            <button className={`${styles.emergency} bg-[#F99191]`}>
              <img id={styles.call} src="/assets/Call.png" alt="" />
              <p className={`${styles.emer} mb-0`}>Emergency</p>
            </button>
          </a>
        </div> */}
        </div>
        <div
          className="border border-[#979797]"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <VscBell style={{ height: "65%", width: "65%" }} /> */}
        </div>
        <button>Hello</button>
      </div>
      <div className="mt-10 ml-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae
        animi temporibus. Perferendis quaerat iste velit facere. Eligendi sunt
        enim voluptatem quas ab recusandae aliquam in incidunt impedit iste.
        Non, quidem? Fugit praesentium perspiciatis aut dolorum enim animi
        explicabo provident delectus tenetur ex distinctio at dicta excepturi
        atque, commodi quas quia accusamus nihil? Assumenda, obcaecati, atque
        quam incidunt quas asperiores illo corporis suscipit voluptatibus magni
        similique. Deserunt totam ipsum ab molestiae ad libero reiciendis
        veniam, vel provident mollitia porro harum fuga! Exercitationem neque
        nostrum dolore quos aspernatur obcaecati rerum ea. Laborum adipisci
        natus id excepturi eum ab laboriosam. Cumque eaque tempora harum rem,
        voluptatum modi amet quasi? Ipsum maiores totam quas nihil in. Esse
        consequuntur atque aliquam pariatur? Laudantium amet nihil vitae ut
        deleniti? Illo dolor eius culpa a deserunt consectetur quae quas officia
        quos labore nisi corporis perferendis, ut alias optio, mollitia quidem
        expedita debitis consequatur explicabo et amet harum delectus minima.
        Atque quos praesentium ipsum veniam libero dolore qui a accusantium.
        Dolorum, vero laboriosam maiores, expedita atque voluptas fugit sint
        vitae repellat molestiae voluptatum delectus deleniti nostrum fugiat
        doloribus minus cum repudiandae aperiam adipisci distinctio! Quo
        obcaecati quaerat porro libero perspiciatis dignissimos molestiae!
        Voluptas dolore sapiente ratione itaque illo vel minima sed molestias
        exercitationem quos omnis ad sit doloribus cum facilis possimus
        assumenda rem dolores, praesentium deleniti? Omnis saepe soluta
        laboriosam doloremque nemo neque, sequi asperiores velit adipisci
        voluptate tenetur? Blanditiis debitis quis expedita totam accusamus
        explicabo ipsum fuga praesentium labore! Illum harum distinctio ad
        consequatur. Nobis soluta, atque recusandae sed, neque nam minus quasi
        molestiae optio commodi unde distinctio beatae nisi ducimus reiciendis
        rerum voluptate veniam molestias consequuntur dolorum sit eius quos
        tempore. Eligendi laudantium quaerat atque sed! Omnis modi impedit
        ducimus, minus ex laudantium. Cupiditate laudantium voluptatem minus
        iste asperiores, maxime quibusdam. Quisquam deserunt, nemo nam
        accusantium asperiores temporibus dolorem similique iusto ab? Impedit
        laborum ut aliquam obcaecati nam magni exercitationem adipisci fugit
        nostrum tenetur dolores explicabo perspiciatis, maiores voluptas
        expedita. Obcaecati praesentium cum sit odit debitis, eum tempora
        dolorum eveniet ea optio et, molestias commodi. Possimus, vero ipsam,
        inventore est sequi itaque ipsum fuga asperiores praesentium porro rerum
        tempore voluptatem pariatur libero impedit iure! Neque adipisci corporis
        nihil tempora commodi quaerat aut aspernatur provident dignissimos
        possimus optio esse ab, saepe tenetur cumque nesciunt. Dolores
        consequatur vitae in cupiditate? Quaerat doloribus consequatur, commodi
        blanditiis harum at a qui animi temporibus eum optio, aperiam delectus
        maxime id neque consectetur excepturi deserunt voluptas placeat
        laboriosam omnis voluptatem ea? Dolorum possimus totam quo ut. Odit
        perferendis, aliquid illo laudantium unde, error ab, corporis at esse
        ipsum quis delectus eligendi debitis vero qui enim deserunt quaerat
        atque ea? Obcaecati consequuntur, mollitia sit cum optio doloremque
        commodi laborum nihil voluptatum, laudantium praesentium vitae!
        Eligendi, suscipit asperiores nihil rem autem enim animi libero, ipsa et
        quam quasi non quas corporis odio rerum possimus, adipisci cupiditate.
        Recusandae voluptatem, nesciunt corporis soluta culpa harum sint atque.
        Optio praesentium officiis id mollitia! Animi esse repellat non,
        deleniti magni dicta! Vel consectetur accusantium at quos labore maiores
        dolor modi ipsum eos mollitia facere asperiores culpa illo, laudantium
        pariatur exercitationem cum nesciunt unde quibusdam repudiandae,
        possimus ullam, hic reiciendis? Cum, praesentium quo animi eaque totam
        ex amet ad aspernatur eos quibusdam facere non fugit vero a voluptatum
        possimus corporis eligendi doloribus. Cumque ea facilis eius, iure
        laborum a! Numquam quasi iusto nemo magni, vel quia necessitatibus quam
        repellendus minus expedita iure aperiam doloremque rerum optio cum dolor
        delectus alias magnam. Soluta reiciendis praesentium, quia earum ab quam
        repudiandae at deserunt corrupti laboriosam totam est provident
        veritatis velit sint, consequuntur necessitatibus quisquam aspernatur
        nihil eos recusandae, qui illum dolores ipsa. Voluptates adipisci dolore
        incidunt praesentium cum nobis quam repudiandae laboriosam quisquam
        eaque. Assumenda nisi voluptate amet voluptatem velit vel quas molestias
        dolorum laudantium, eum sapiente laborum inventore commodi id deleniti
        nihil iste temporibus maiores? Voluptatibus consequuntur ut beatae
        officiis asperiores vitae atque consectetur dicta ducimus! Omnis aliquid
        magnam modi ducimus veniam explicabo sequi consectetur. Iure praesentium
        architecto nam et amet magnam maiores deleniti excepturi unde quia? Non
        quis autem porro debitis vel, qui possimus ipsum in cumque quisquam
        doloribus veritatis alias iure dolores voluptatem quia harum quo dolorem
        consectetur ex sit. Iste ab aliquid itaque repudiandae enim magnam aut
        deserunt, provident, odit quidem totam culpa sit animi illo a
        reiciendis? Saepe, qui est nobis et reiciendis omnis, culpa placeat
        labore laborum, tenetur incidunt eligendi unde ex nam ab nemo error
        officia quae quo praesentium tempora asperiores explicabo ullam hic! Quo
        adipisci fugiat molestias? Voluptates voluptatibus non magni corporis
        perferendis. Officia, a hic, nihil temporibus distinctio ipsum enim
        quaerat sint tenetur laboriosam deserunt ea aliquam dolor maxime dolore
        dolores soluta corporis ut vel quia. Vero ipsum facere natus atque
        praesentium dolor quas tempora deserunt libero laudantium et quae
        voluptate quaerat, dignissimos, mollitia adipisci ut quam ullam sit
        expedita doloremque nemo fugit! Atque repellat nam ea repudiandae sed
        voluptate molestiae, ex aliquid quam, quis temporibus veniam dolore
        ipsam fugiat. Aperiam cupiditate reiciendis ipsam nesciunt consequatur
        aliquid delectus asperiores fugit veritatis! Voluptas dolorem nisi
        fugiat magnam cum suscipit animi fugit. Magnam voluptas natus doloribus!
        Recusandae placeat blanditiis sed hic facere aperiam possimus, ipsum
        ratione aliquid quod nemo enim animi, reprehenderit quibusdam molestiae
        laudantium. Hic repudiandae quia exercitationem sint ipsa, voluptate
        cumque? Officia suscipit tempora consectetur laudantium asperiores amet
        autem voluptatem impedit aliquid, ducimus ullam doloremque, eaque
        pariatur illum, tenetur inventore repellat ab ratione! Quod perspiciatis
        sed fugit corporis commodi explicabo rerum id necessitatibus corrupti in
        tenetur, similique, asperiores fugiat. Ullam assumenda eum praesentium
        aut amet soluta quam eligendi? Eligendi, ducimus, amet unde, animi
        corrupti molestias dolores autem veritatis consequatur aliquid earum
        aliquam tempore voluptate debitis. Maiores molestias doloremque ut animi
        fuga, quae fugit temporibus eius asperiores modi facere quibusdam non
        harum perspiciatis provident inventore enim eos? Consequatur impedit
        tempore laudantium ullam laboriosam, nesciunt dolores quidem iusto sunt
        blanditiis non eaque atque neque id illum omnis libero aspernatur
        pariatur dignissimos ad debitis porro harum, rem nisi. Libero aperiam
        quasi itaque nostrum sunt cum, omnis dicta magni ab possimus sit ipsam
        soluta sequi ipsum aut, quos fuga maiores reprehenderit, doloremque
        cumque? Veniam sint commodi itaque nemo labore dignissimos ab recusandae
        consequuntur, inventore qui minima quod et ipsum pariatur explicabo sunt
        laborum laboriosam sit quas temporibus fugit harum id! Saepe quisquam
        sunt laboriosam suscipit maiores quia, culpa numquam nihil corrupti et
        quibusdam? Quod fuga vero quos similique ipsa nisi, exercitationem nam
        aut quasi voluptatum quas. Aspernatur perspiciatis quia ullam corporis
        necessitatibus rerum. Doloribus ea exercitationem autem architecto,
        assumenda quo et id tenetur, illum ad molestias inventore fuga
        accusantium libero omnis nisi quia nostrum ipsa quasi deleniti ut
        dolorum est asperiores! Ex quos incidunt rerum libero excepturi
        temporibus ipsum deserunt voluptatem quidem assumenda eligendi
        perferendis, doloremque, eum pariatur exercitationem cum tempore nemo
        veniam alias ullam consequatur repellat et. Autem beatae recusandae
        aperiam accusantium sint velit qui sed eligendi magni modi, quia vel
        tempore inventore iure. Dicta, alias. Nulla repellat iure similique
        error dolor explicabo non ex aliquid adipisci, ut soluta iusto maxime
        assumenda architecto culpa maiores, eos quo nihil eius voluptas sed
        ipsum aspernatur? Laudantium aliquam, obcaecati quia, harum tempore
        pariatur nesciunt quaerat magni commodi rem architecto dolor molestiae
        sequi facere perspiciatis cum culpa quod odit non sed fugiat qui. Sequi
        distinctio veniam aspernatur nam consectetur voluptatibus facere quo
        repellendus, recusandae soluta suscipit reprehenderit perferendis
        laudantium aliquid dolorum reiciendis sit totam? Sit aspernatur
        explicabo expedita. Ea aspernatur sit ex laborum architecto quod nemo
        accusantium hic, temporibus similique dolorum ut quidem nulla maxime?
        Voluptas iure laboriosam quae. Maxime recusandae dolorem libero
        distinctio dignissimos. Ad ducimus saepe aut reprehenderit obcaecati
        quia quam recusandae iure veritatis quaerat officiis unde sint dolor
        enim culpa, quisquam quas qui deserunt magni. Officia consequatur nisi
        modi architecto laboriosam rem, consectetur quasi veniam, incidunt
        dicta, fugit minima perferendis quis velit provident. Soluta,
        dignissimos repellendus. Labore, beatae aliquid! Quos laborum nemo
        maxime numquam doloremque cum architecto voluptatibus consequuntur.
        Nobis, quia facere? Necessitatibus assumenda delectus ducimus maxime,
        sapiente corrupti officia quae culpa quia debitis odio quidem
        repellendus, dolorem totam autem labore laudantium quis quasi cum unde
        perspiciatis. Reiciendis fugiat voluptas deserunt adipisci aliquam rem!
        Nulla ipsa ea, debitis cumque voluptatibus aperiam et veniam in maiores
        magni quo aut officiis distinctio repellat quis modi repudiandae
        repellendus culpa quidem alias minus necessitatibus! Iusto ad
        exercitationem sed eligendi quidem magnam, dicta impedit velit laborum
        aliquid voluptates odio assumenda magni inventore et, optio sit enim? Ea
        blanditiis consectetur officiis odit accusantium delectus magni ad atque
        id numquam veritatis reiciendis distinctio cum amet ducimus est
        temporibus error, aperiam placeat, nulla dolores praesentium ut. Quis
        accusamus numquam commodi expedita praesentium harum doloremque
        excepturi autem quod, cumque cupiditate error voluptas placeat eum modi
        assumenda saepe nulla tenetur vel adipisci corrupti totam facilis
        deserunt fuga! Iste maiores omnis ratione debitis placeat nostrum quasi
        porro unde corrupti maxime ex, nesciunt laborum quos doloremque! Tempora
        praesentium suscipit amet commodi ipsam excepturi architecto expedita
        repellendus voluptas, consectetur, aliquid laboriosam quam quasi fugiat
        dolores labore dolor adipisci harum mollitia magni vero corrupti saepe
        non. Distinctio ipsum voluptate beatae hic consequatur, consequuntur
        nostrum accusantium quaerat. Reiciendis dolore distinctio nam obcaecati
        praesentium optio, quaerat veritatis nostrum ut fugit omnis quod iusto
        voluptate, voluptatum vero accusamus earum alias perspiciatis quisquam.
        Doloremque eum consectetur, consequatur eos laudantium ratione nemo
        facere quidem praesentium commodi magni tempora quas eaque cum adipisci
        maxime nulla iste deserunt quaerat tempore ab sint. Suscipit voluptate
        aperiam ducimus ipsa quae iusto excepturi minus pariatur exercitationem
        commodi quasi eius, facilis provident neque nam blanditiis natus tempora
        consequatur repellendus. Quia culpa esse deleniti blanditiis nihil
        ducimus perferendis nisi dolorem? Incidunt repellendus nemo itaque
        deleniti beatae cumque sit molestias eos quis! Corrupti debitis
        excepturi quibusdam perspiciatis quo consequuntur odio! Minima
        temporibus pariatur inventore harum consectetur ut quo minus molestiae
        hic possimus sequi quis, consequatur ratione earum dolores fuga. Maiores
        harum, magnam minima impedit officia laboriosam, possimus, officiis
        doloribus aliquid doloremque quaerat eligendi natus sequi excepturi
        architecto cumque hic illo earum qui corporis. Alias veniam provident
        error porro earum, non quos labore, velit quisquam voluptatibus eos!
        Dignissimos dicta nemo ipsam dolorem distinctio iure? Natus labore velit
        doloribus a nostrum placeat sunt necessitatibus architecto! Consequuntur
        quis, aut fuga error pariatur modi architecto rerum eaque labore a quam
        voluptates earum nam velit temporibus ut quaerat? Natus excepturi
        tempora earum quos consequatur provident corrupti, neque illum nam
        deleniti. Delectus corporis quibusdam perspiciatis earum quae dolorum
        sequi deserunt eum commodi quam ducimus dolores officiis quas ab harum
        cumque amet magni repudiandae, repellendus voluptate fugiat, itaque
        esse. Atque, totam? Atque sit impedit minus! Iusto beatae eligendi
        itaque ratione fugit maxime minima consequuntur, aperiam a rem similique
        quos odit, ullam fuga esse odio dolore cum, error deserunt culpa
        assumenda? Eum molestiae vel voluptate doloremque quibusdam, est
        repellat, ex, quo fuga laudantium tenetur! Provident quis delectus ab
        quod recusandae, pariatur facilis laborum, at voluptates eos molestiae
        rem consequatur dicta doloremque facere earum nobis cum? Est pariatur
        error mollitia, nobis nostrum veritatis id reiciendis, officia maiores
        modi nam molestias perspiciatis sunt corrupti a dignissimos tempore
        odit? Exercitationem, assumenda quos! Doloremque et dolores expedita
        labore provident neque rem, pariatur illum libero culpa illo beatae
        maiores soluta saepe voluptas, maxime dolor consectetur architecto, ea
        necessitatibus! Hic maiores velit porro modi beatae incidunt voluptatem
        iure est nihil eligendi minus in delectus molestias suscipit pariatur,
        facilis blanditiis repellendus. Tenetur molestias qui tempore suscipit
        repellendus veniam soluta enim error nulla a architecto non nostrum
        totam magnam magni et dolorum ut eius velit minima, iste nam fugit sequi
        asperiores. Aliquid, voluptatibus dicta eaque fugit nostrum debitis et
        fugiat deleniti assumenda natus ducimus accusamus laudantium ab officiis
        facere quae odit, molestiae laborum beatae repellendus cum atque
        repudiandae iure? Consectetur cum tenetur ipsam iusto obcaecati itaque,
        optio dolor iure nobis necessitatibus, quod earum corrupti soluta
        corporis, cupiditate id nostrum et? Incidunt aperiam voluptates
        similique id nam, excepturi illum tenetur dolor repellendus harum
        adipisci qui animi. Distinctio aliquam similique, exercitationem aperiam
        id expedita quam beatae numquam rerum iure sint pariatur placeat commodi
        autem ipsa eveniet laborum unde ullam ipsum nam, accusamus neque
        possimus? Voluptates, dolore illum? Ab sit quod molestias magni facere
        quos, delectus officia temporibus modi? Unde accusamus itaque
        repellendus explicabo molestias odio molestiae ex placeat dolorem
        deleniti in expedita saepe tempore quo aperiam rem quaerat modi rerum,
        dolores harum optio! Itaque eligendi accusantium doloremque facere
        provident qui impedit repellendus ullam vel dignissimos nam aspernatur
        maiores alias architecto labore, aliquam beatae similique iusto suscipit
        nihil iure debitis perspiciatis blanditiis id. Delectus ab quae tenetur
        quam fuga est alias animi nobis reprehenderit? Ea nam nihil dicta
        similique temporibus aut repellat veniam sequi. At error magni
        repudiandae, quo saepe beatae delectus expedita? Temporibus esse ex
        labore aliquam quaerat! Excepturi exercitationem ab rem officia ipsa
        quae. Sapiente distinctio illo minus repellendus similique laudantium
        autem laborum dolore nobis temporibus, eveniet molestiae et neque non.
        Ipsa veniam explicabo alias ab fuga assumenda repellat totam neque non
        laudantium fugiat animi doloribus quo exercitationem iusto ipsum quae
        ipsam dolores, cumque possimus. Dicta fugiat, placeat consequatur
        quibusdam impedit exercitationem ullam expedita repudiandae libero earum
        soluta, enim veniam. Officia eos officiis perspiciatis quis adipisci
        expedita tempora eum voluptatem est at iste, omnis modi quia suscipit
        architecto. Recusandae omnis, eveniet in dolorum et quis, facilis
        provident expedita vitae reprehenderit amet nulla! Ullam vero officia
        eveniet libero dolor possimus quasi mollitia omnis, minus porro!
        Voluptatum quas non molestias dicta alias quisquam! Voluptates labore,
        rem quod, repellendus assumenda dolorem cum id nihil sint in est! Vel,
        commodi sint provident libero, iusto nihil et ut rerum cum perspiciatis
        mollitia nulla nam quae consequatur eveniet dolores hic ducimus ab
        adipisci doloribus deleniti aspernatur, ea magnam numquam! Delectus
        fugiat ea facilis doloremque iusto error, rem laboriosam in ducimus,
        reprehenderit accusantium rerum praesentium cumque sed perferendis nam,
        optio necessitatibus voluptatibus dolore ab vel neque at repellat sint?
        Iusto tenetur minima laudantium commodi. Error harum quia ipsum
        blanditiis debitis, in maxime qui cum aliquid velit non. Nihil culpa
        deserunt possimus, voluptatem, qui totam deleniti eos, dolorum
        exercitationem iure doloremque quod nesciunt vero ullam quaerat ipsam ex
        ipsum at illo sunt quam non. Perspiciatis, sequi! Dolor delectus
        perspiciatis impedit. Quaerat necessitatibus vitae ducimus qui optio.
        Reprehenderit voluptatum debitis nesciunt, porro impedit recusandae
        laborum obcaecati velit accusantium natus ipsam blanditiis cumque
        veritatis at laudantium perspiciatis nihil quaerat accusamus ad nemo
        voluptatibus officiis! Itaque fugiat reiciendis error quas assumenda
        nihil soluta maxime eveniet nemo quia id alias dicta perspiciatis aut
        porro molestias amet laborum debitis, suscipit voluptatibus. Animi
        eligendi deleniti quae voluptates, exercitationem eveniet ad rerum eius,
        fugiat perferendis ipsa ratione soluta porro beatae! Cupiditate quod aut
        qui dolore excepturi vero? Nisi culpa cum aliquam! Quas sapiente ad,
        eius quasi, blanditiis obcaecati earum ipsum quia non officiis fugit.
        Unde fugiat numquam eum distinctio exercitationem, veniam dolorem minus
        tempore. Beatae eveniet nam molestias asperiores! Cupiditate quas
        dignissimos veritatis iste sapiente, adipisci asperiores aliquam itaque
        maxime provident odio accusantium perspiciatis vitae earum libero natus
        nobis porro at repellat delectus? Repudiandae qui, perspiciatis, a modi
        placeat tempora minus nam rerum veniam sapiente repellendus velit iste,
        harum distinctio suscipit voluptatibus doloremque unde cupiditate porro
        dolorum itaque sequi pariatur? Quos at ea veniam, autem, molestias magni
        eos vel rem sapiente iusto voluptates reiciendis optio enim porro hic
        repellendus quae nam adipisci nobis nesciunt repellat recusandae
        impedit! Autem, facilis. Esse nostrum commodi atque aspernatur ratione
        officia optio praesentium laudantium, amet voluptas, dignissimos
        inventore debitis libero, at ea vero quis mollitia labore qui. Modi,
        tempora aspernatur! Tempora, rem dolorum. Nihil laborum iste voluptas,
        quisquam asperiores rerum quibusdam placeat repudiandae et. Modi quaerat
        quisquam unde voluptatum incidunt saepe dignissimos accusamus nam
        asperiores ad eos ratione, fugit voluptatibus exercitationem praesentium
        animi illo a ipsa velit et? Suscipit alias ipsum, eum iusto blanditiis
        mollitia, earum, sapiente iure minus quisquam nemo. Culpa, maxime
        nesciunt. Culpa, magni fuga quibusdam repellendus possimus deserunt
        labore modi. Reiciendis ab quia aperiam suscipit inventore non illum
        deleniti voluptatibus possimus fugit. Enim voluptates, accusamus soluta
        omnis quaerat praesentium error iure ipsum? Quo voluptas qui praesentium
        quas dolorem. Officia reprehenderit saepe, non nisi delectus culpa
        accusamus libero ipsa eligendi corrupti commodi tenetur animi deserunt.
        Pariatur odit harum cumque molestias obcaecati sunt magnam
        exercitationem facere est consequuntur adipisci corporis dolore
        inventore amet porro eius ipsam nihil facilis, eveniet tempora
        repudiandae. Illum quo quos sequi saepe ipsam? Placeat hic perferendis
        dolores nesciunt, dolor numquam id tenetur natus aliquam. Hic architecto
        repellendus tenetur sapiente quia consequatur omnis corporis nam quo
        deleniti, minima quam repellat nesciunt inventore dolore vitae a.
        Facilis, optio! Ut eius, sunt debitis consectetur cum beatae, aliquid
        tempore harum, perspiciatis est excepturi laboriosam qui! Nostrum, culpa
        delectus? Rem quasi error minus non ullam quas dignissimos consectetur
        dolores ducimus commodi! Ea, harum distinctio! Placeat at illo ad
        officiis unde. Hic laborum doloremque ab expedita. Quam totam ipsam
        nihil veritatis laudantium atque assumenda expedita odio ab soluta. Vel
        magni inventore dolore aut aspernatur rem repellendus accusantium? Sit,
        possimus. Reiciendis provident harum odio nobis, modi fugiat molestiae
        sit quo! Temporibus voluptate iure aliquam assumenda? Culpa modi quaerat
        recusandae! Praesentium fugiat quo culpa. Voluptates iure non veniam
        sequi doloribus animi, libero numquam facere, quas in incidunt, est
        molestiae excepturi atque sit vitae molestias distinctio provident
        expedita? Consectetur dolores voluptas debitis laborum incidunt ullam
        enim totam, dolore libero a at unde inventore quasi itaque dolorem
        tempore labore qui similique ducimus veritatis fuga impedit accusantium?
        Delectus debitis voluptate reiciendis quam eos rerum, sed perferendis
        quibusdam explicabo ea totam quisquam eaque neque assumenda? Id aperiam
        mollitia aut adipisci dolorem commodi ea incidunt hic atque voluptatibus
        neque sequi delectus modi, voluptates ab accusantium, nam debitis
        cumque, eius praesentium minima et blanditiis accusamus inventore. Ad
        unde suscipit voluptatibus porro eaque repellendus blanditiis. Possimus
        provident incidunt laborum veniam doloremque accusantium autem! Earum
        beatae eveniet commodi totam ea, fuga ullam voluptatem, autem repellat
        quisquam architecto quia optio vel officia maxime non at aperiam
        doloribus excepturi error praesentium. Eum non repellat fuga alias ullam
        voluptatibus doloremque aspernatur voluptate dolorem magnam ipsam, minus
        et quidem, quo quasi dignissimos error ab? Deserunt aspernatur ipsa sint
        facilis fuga neque consequatur? Pariatur, expedita sapiente dolores quod
        obcaecati explicabo, aliquam soluta corrupti quae laboriosam quo rem
        deserunt provident. Ea, numquam similique rerum fugit aliquam magni.
        Illum obcaecati quasi velit repudiandae debitis repellat perspiciatis
        asperiores consectetur adipisci quas tempore, earum rem numquam dolor et
        corrupti fugit non odit. Officiis qui possimus nostrum, labore optio
        deleniti, consequuntur ex aspernatur quos ratione sit inventore,
        asperiores quidem necessitatibus obcaecati ipsam facilis delectus dolor
        aliquid velit veritatis laboriosam cumque. A qui fugit, expedita
        reiciendis non minus, esse et blanditiis soluta aspernatur obcaecati
        reprehenderit id odit magnam ad beatae? Quidem doloremque dolores
        expedita! Praesentium natus quo, accusantium aliquam recusandae
        voluptatem veritatis totam quasi a error nulla animi explicabo porro
        enim culpa alias iure sequi sint? Eveniet tenetur, esse, officiis
        molestiae eum et labore recusandae reiciendis odit sit deserunt quod
        voluptatum eaque nihil ad minima quisquam tempora enim nam, placeat
        sapiente dolore ipsum blanditiis officia. Ipsum a omnis unde laborum.
        Quasi sunt laboriosam quas hic consequatur minima iure illum enim!
        Necessitatibus nobis assumenda harum maxime repellat, dolorem eveniet
        soluta nihil? Odio natus ipsam, molestiae beatae provident, nemo
        mollitia reiciendis a error veritatis, odit debitis! Est officiis
        reprehenderit ad quaerat dolores iusto quae eligendi doloribus nobis
        voluptatibus blanditiis possimus deleniti omnis, eos error repellat
        corrupti mollitia ipsa commodi incidunt explicabo? Sint rerum reiciendis
        qui dolorem, accusantium omnis totam optio perspiciatis neque, quaerat
        id, obcaecati recusandae vitae saepe aliquid itaque eos voluptatum at
        asperiores! Soluta et veritatis, voluptas corporis quidem illo tempora
        iure iste voluptates quo consequatur obcaecati fugiat earum sunt illum
        similique animi voluptatibus blanditiis mollitia dignissimos!
        Repellendus, officia! Nobis maiores cum veritatis iure facilis nemo.
        Eveniet explicabo tenetur vel veritatis praesentium autem distinctio
        minus soluta cumque recusandae, deleniti ducimus corrupti, harum, ipsam
        dolore molestias labore corporis. Minus perferendis iure veritatis
        numquam, quasi alias placeat tempora reprehenderit nostrum pariatur
        cupiditate, labore amet rerum voluptates quibusdam recusandae illo
        ratione ad animi, eligendi necessitatibus in nemo voluptatem est! Autem
        cupiditate nobis unde omnis hic! Necessitatibus mollitia quibusdam quas
        quia sapiente officia ab saepe impedit nesciunt, magni assumenda illum.
        Ullam aliquam omnis maiores corporis a fugiat, ratione possimus
        perferendis, debitis incidunt, quod libero hic consequatur beatae.
        Tempore porro iure dignissimos? Repudiandae reiciendis excepturi,
        aliquid sed incidunt mollitia quasi tenetur consectetur. Dolorum
        eligendi consequatur nostrum! Dicta, iusto nemo porro quos reiciendis
        labore atque vero. Voluptatibus possimus iste dignissimos pariatur
        exercitationem mollitia eveniet consectetur dolores asperiores omnis,
        assumenda at. Porro, saepe quae! Suscipit quia ullam dolores impedit
        perferendis blanditiis unde alias nostrum dicta accusamus cumque itaque
        soluta, reiciendis tempore aliquid cum iure sed expedita eius ipsam? Sit
        quidem, temporibus animi suscipit dolorem minima, praesentium laudantium
        ut porro eligendi molestias minus asperiores? Veniam magni laboriosam
        repudiandae consequatur fuga, harum illo! Cumque adipisci impedit nulla
        facilis voluptates porro, officiis facere dolores ea ullam,
        reprehenderit neque ab non dolorem esse blanditiis maxime officia quasi
        accusamus. Esse quod voluptates temporibus, adipisci ullam placeat
        perspiciatis enim illo vitae dolorem reiciendis! Eum aperiam, deleniti
        sint nisi sapiente at repellat totam neque perspiciatis blanditiis
        consequatur. A odio, quasi aliquam numquam quam odit tempora eligendi
        commodi illo, eveniet esse cupiditate atque nemo tempore expedita quidem
        omnis cum cumque voluptatibus repellat mollitia magni nostrum
        consequatur placeat! Cum vel, recusandae earum deserunt id accusamus et
        magni quibusdam voluptatem animi nostrum, quidem, perferendis quas
        explicabo! Similique nisi vitae dolorem nihil ipsum odio velit, debitis
        ex modi iste earum tempore totam! Similique iure dolorum vitae esse
        pariatur omnis harum, cupiditate illo hic quos quidem enim veniam
        molestiae cum vel? Ullam repellendus nisi minima hic, laboriosam, autem
        harum quo aliquam expedita recusandae mollitia, aspernatur perspiciatis
        quibusdam esse molestias. Repellat consectetur unde perferendis, ab hic
        modi non recusandae vel dolorem eius cupiditate vero, ullam consequuntur
        minima sed? Quae dicta perspiciatis veniam delectus, sapiente saepe
        consequatur culpa minus architecto exercitationem dignissimos beatae
        labore ad non dolorum vitae deleniti quam, voluptas numquam? Nihil
        dolorem earum recusandae at iusto dolore itaque, maxime atque doloremque
        culpa ut autem asperiores nisi sit quibusdam vero placeat? Ipsa autem
        illum iusto inventore dolor officia at sit consequatur nihil aliquid
        blanditiis dolorem vitae porro laborum libero nobis omnis ratione
        repudiandae qui quisquam, impedit incidunt vero id quia. Odio laboriosam
        et quasi nemo itaque natus nisi consequuntur sit commodi, iste harum ab
        nulla tenetur dolorem veniam unde placeat quisquam hic consectetur.
        Exercitationem libero pariatur, officia, vero ex earum minus adipisci
        explicabo quo rerum delectus, ut placeat aliquid aspernatur? Sequi
        molestiae hic omnis? Nemo libero incidunt ex esse repudiandae soluta,
        aliquam maxime, est deleniti quisquam fugit neque accusantium qui!
        Assumenda nisi nam sequi deleniti quo tempore eaque ea provident?
        Excepturi magnam, voluptates ea neque, voluptate obcaecati ab nobis
        ducimus soluta inventore ipsa beatae? Consequatur, veritatis doloribus
        magni ducimus pariatur maxime, quaerat, impedit facere in perspiciatis
        iste. Quisquam et deleniti dignissimos deserunt, facere atque voluptatum
        eius expedita eligendi modi aut magni recusandae. Et illum ab facilis,
        cumque nam dignissimos, blanditiis, id consequatur aliquam minima
        placeat nobis. Eveniet, quae atque. Doloremque reiciendis ad dolore
        aspernatur inventore laboriosam ratione culpa explicabo illum expedita
        molestias saepe sint laudantium distinctio vitae nulla provident
        blanditiis harum a in, repellendus quia fugit ea. Consectetur, accusamus
        est. Cumque exercitationem, id molestiae maxime maiores placeat veniam
        ipsa laboriosam culpa aliquid? Aperiam maxime quam eos molestias
        deleniti voluptas doloribus cumque error nam. Quia reprehenderit, ipsam
        repellendus, magnam sequi rem ullam libero fugiat animi sit totam
        delectus vero nam! Voluptas earum minus, neque error nobis incidunt ex
        sint harum sequi nemo quaerat repellendus ipsum quam numquam tempora
        fuga quod reiciendis quo ut optio laudantium tenetur exercitationem,
        quas excepturi! Corrupti, aliquam at? Maiores non ipsam exercitationem
        ea repudiandae libero harum eius quisquam optio laborum totam voluptas
        facere deserunt tempore odio eaque quidem dolorem quo nihil, ab delectus
        earum. Facilis, assumenda inventore quia nostrum ullam veritatis
        deserunt? Dicta ratione nulla aliquid ex aut asperiores, ipsa atque
        illum hic dolorum, numquam incidunt quis rerum adipisci id illo veniam
        beatae laudantium, voluptatem sequi! Nihil distinctio ullam, possimus
        nulla minima ipsam. Incidunt, voluptate harum laborum vitae dolorem
        nesciunt ducimus quia quaerat quas unde porro quod et, ullam magni
        eligendi? Libero nostrum deserunt iste voluptas nesciunt, sit dolor
        magnam perspiciatis non? Accusamus reprehenderit aliquid, voluptatibus
        quasi natus quidem possimus inventore voluptatem eos porro velit
        distinctio quia magnam aliquam asperiores nobis, qui enim amet nemo.
        Soluta minus, beatae ipsa aliquid, dignissimos quod voluptatibus eum hic
        laborum aut officiis, praesentium id dolor. Aperiam consectetur aliquid
        repudiandae ipsa! Libero iusto ad, provident ratione facilis architecto
        nobis illo tempore necessitatibus quisquam officiis corporis
        reprehenderit voluptas blanditiis aut distinctio rerum, laborum
        temporibus illum numquam similique? Excepturi repudiandae assumenda
        voluptatibus labore a voluptates, quod laboriosam sed quam molestias
        necessitatibus soluta reprehenderit iusto quis asperiores mollitia?
        Harum dolorem maiores incidunt animi autem debitis laborum, quasi
        quibusdam porro quisquam adipisci corrupti possimus necessitatibus
        corporis? Minus nostrum tenetur sed maiores ipsa aut rem dignissimos.
        Explicabo eum vero numquam animi quae, quod voluptates magni eos
        quibusdam molestias porro eaque ducimus quasi alias libero voluptas
        repellat est, optio asperiores iste impedit doloribus ratione! Quod
        beatae corporis quos doloremque tempore repudiandae, est expedita
        numquam molestiae praesentium ex a, nam minus! Consectetur, ullam ipsam!
        Accusantium quidem repudiandae sit magni inventore consectetur quisquam
        ipsam, vitae distinctio nostrum est eos aliquam blanditiis placeat
        exercitationem veniam, possimus fuga aliquid facere ipsum adipisci illum
        natus! Ipsum quod, recusandae sunt odit ullam possimus velit aut ex
        consequuntur iusto iure debitis rerum molestias minus consequatur
        veritatis laudantium quisquam fuga! Numquam dolorem quibusdam aliquid,
        porro optio a consequatur repellendus et quasi perferendis non id
        dignissimos tempora voluptatem praesentium obcaecati quos repellat at
        similique consequuntur, maiores ea delectus quas! Consequuntur nobis
        asperiores placeat molestias nemo nesciunt aspernatur ad reiciendis sed
        in quia dolore suscipit, ratione deserunt odio molestiae! Deleniti ea
        amet quasi perferendis molestias nihil nostrum, itaque est autem,
        voluptate vel, tempora maiores labore facilis hic omnis! Animi sequi
        explicabo fugiat necessitatibus eveniet quos accusantium soluta harum
        corrupti, corporis reprehenderit laboriosam quaerat? Incidunt, ad
        doloremque corrupti reiciendis harum architecto consectetur voluptatem
        eos et at fuga, ut voluptatum porro nesciunt nam saepe dicta maxime
        cumque. Sed esse autem repudiandae amet et ab rerum officia magnam qui
        sapiente illum necessitatibus tempora deserunt officiis numquam quae
        reprehenderit vel ex, fuga cum distinctio asperiores adipisci
        aspernatur! Nisi, quaerat impedit facilis quia voluptatum quo sunt. Illo
        amet harum nisi? Sit repellendus ducimus hic, suscipit obcaecati, atque
        voluptatibus laborum facilis in delectus iure at quidem dolorum nisi
        possimus eum ut. Asperiores quia ducimus perferendis facere cum
        doloremque deleniti nobis culpa. Sed vero molestiae eos voluptatibus
        mollitia nemo, ratione ab error quam labore optio porro beatae
        doloremque illum impedit corporis harum eveniet aliquam asperiores? Quas
        cum, sed libero dignissimos culpa voluptatibus quidem nihil iure
        quibusdam earum ipsa fuga laboriosam nisi nemo. Explicabo, accusantium
        quam autem dolore nisi possimus delectus harum earum eius illum tempore,
        libero quibusdam neque omnis, quaerat reprehenderit et eaque aperiam
        praesentium. Odit est illum cupiditate. Exercitationem a hic odio id
        neque veniam esse, consequatur eligendi quo perferendis quasi rem
        possimus praesentium odit ullam saepe nemo, molestiae reprehenderit
        ipsam dolore doloribus ea? Iure eaque tempora, hic ex exercitationem
        adipisci inventore nesciunt iusto atque consequatur quae! Aut voluptatum
        necessitatibus velit odit quos quas deserunt accusantium iure non minima
        pariatur omnis natus reiciendis excepturi ratione eos, modi atque
        provident dignissimos, ullam tenetur ut consequuntur neque dolore.
        Doloribus esse, deleniti ad voluptatum illo incidunt repellendus officia
        itaque, libero beatae vel. Exercitationem, dignissimos possimus
        distinctio explicabo sequi minima, error eveniet est odit asperiores
        magni a minus reprehenderit doloribus id aliquam nihil reiciendis
        repellat dolores itaque facere perspiciatis deleniti dolorum! Aspernatur
        aperiam delectus error adipisci earum accusamus accusantium repellendus
        numquam voluptatem quas. Ducimus facere, praesentium at perferendis
        cupiditate recusandae iure tempore exercitationem nostrum, beatae porro
        rerum impedit modi ratione quisquam sed quod, voluptate amet tenetur
        blanditiis error officia? Veniam in numquam minus odio voluptatem illum
        aliquam fugit laborum quam! Cum doloremque sed recusandae, minus fugiat
        omnis praesentium saepe, repudiandae laborum veritatis quis. Autem
        placeat cum porro debitis laborum consequatur ipsam enim eum vitae
        nesciunt dicta doloremque nulla maiores officiis tempore, error
        voluptates id sed optio fugit maxime assumenda quas. Voluptas
        repellendus est, soluta sit incidunt veniam debitis consequuntur
        dignissimos accusantium, suscipit, libero vel! Quae nesciunt earum
        suscipit neque debitis vero iusto dolorum quia voluptatum pariatur
        repudiandae praesentium facere temporibus, reprehenderit architecto
        accusamus dolor dolore? Odit tenetur dolorem illum voluptatem aperiam
        possimus ducimus beatae libero. Iste nesciunt obcaecati, eius, ullam
        praesentium nostrum quo, mollitia natus dolorem expedita reprehenderit
        voluptatibus quisquam. Voluptas impedit, rem ullam repellat minima,
        necessitatibus amet nemo mollitia corporis nam tenetur eligendi?
        Temporibus molestiae repudiandae debitis, harum, in rerum adipisci
        nobis, illum impedit quaerat nam fuga at? Voluptatibus dolor tempore
        quae expedita explicabo. Iusto, doloremque. Assumenda corrupti
        reiciendis consectetur magnam nesciunt recusandae debitis eius sint
        excepturi! Autem illum ut officia illo tempora laudantium fugiat
        consequuntur iure excepturi adipisci doloremque quod, inventore magni
        veritatis deleniti aperiam eaque! Inventore possimus harum, minus et,
        non similique magni laboriosam dolore quis nesciunt, qui asperiores
        tempore consequuntur sed! Voluptatem laborum et, adipisci deleniti earum
        rem tempora perspiciatis. Ipsa modi eos recusandae facere tenetur nemo
        dignissimos eius pariatur, autem placeat in nostrum nesciunt aperiam
        labore laboriosam consequuntur blanditiis repellendus unde! Neque,
        accusantium mollitia dolor, assumenda earum eligendi est quidem nisi
        ipsam tempore eveniet. Ullam officia excepturi dignissimos a, vero
        consectetur, consequuntur quos rem facilis commodi veritatis, laboriosam
        possimus cum reiciendis aspernatur tenetur voluptatibus eligendi placeat
        dolorum. Quibusdam, impedit consequuntur. Delectus quo dolores facilis
        assumenda consectetur ratione ea molestias omnis illum voluptatibus
        provident illo veniam cumque ullam in maxime nostrum quisquam, porro,
        cupiditate hic! Expedita beatae rem alias sit corrupti deserunt quos
        repellat tempore possimus tempora ab voluptatem neque quas perspiciatis
        tenetur aperiam, asperiores et saepe inventore dignissimos voluptas
        quasi mollitia. Deleniti, sunt aliquid perferendis error ratione labore
        cumque deserunt itaque maiores quasi tempore omnis repudiandae eveniet,
        ab reprehenderit. Doloremque minus temporibus ratione assumenda vel
        ipsam provident neque blanditiis iure repudiandae, pariatur, perferendis
        nisi rem atque labore voluptates commodi debitis facilis, quas corrupti
        molestiae eaque ducimus aliquam expedita. Neque sint totam aperiam nihil
        autem veniam aliquid quos officiis adipisci eum suscipit odit alias
        ullam architecto nobis deleniti fugiat nesciunt, modi distinctio minima
        ipsam, quia reiciendis quam. Optio neque iste mollitia minima maxime
        omnis consectetur ipsam quos reprehenderit, sunt culpa molestias maiores
        pariatur vitae ipsum enim nobis quam ab libero distinctio illum
        cupiditate odit. Alias, omnis? Labore repellendus recusandae vel sunt
        aspernatur quia aliquam tempora alias?
      </div>
    </>
  );
};

export default AdminDashboard;
