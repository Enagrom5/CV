function BodyElement() {
  return (
    <>
      <h1 id="about">About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero
        illum vitae, atque dolore vero labore aperiam facilis, quia pariatur
        natus qui, exercitationem veritatis incidunt! Eaque aperiam laborum fuga
        velit.
      </p>

      <section  id="skills" className="flex flex-col gap-20">
        <article>
          <h1>Front-End</h1>
        </article>

        <article>
          <h1>Back-end</h1>
        </article>

        <article>
          <h1>Language</h1>
        </article>

        <article>
          <h1>Framework</h1>
        </article>
      </section>

      <section  id="exp" className="flex flex-col gap-20">
        <article>
          <h2>Projet 1</h2>
          <img src="" alt="" />
          <p>
            descriptif : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam sequi quaerat harum obcaecati molestiae aliquam eius
            ipsa! Laborum sapiente asperiores eveniet qui, accusamus consectetur
            numquam! Optio ad voluptate quae saepe.
          </p>
          <a href="lien vers le site"></a>
        </article>

        <article>
          <h2>Projet 2</h2>
          <img src="" alt="" />
          <p>
            descriptif : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam sequi quaerat harum obcaecati molestiae aliquam eius
            ipsa! Laborum sapiente asperiores eveniet qui, accusamus consectetur
            numquam! Optio ad voluptate quae saepe.
          </p>
          <a href="lien vers le site"></a>
        </article>

        <article>
          <h2 >Projet 3</h2>
          <img src="" alt="" />
          <p>
            descriptif : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam sequi quaerat harum obcaecati molestiae aliquam eius
            ipsa! Laborum sapiente asperiores eveniet qui, accusamus consectetur
            numquam! Optio ad voluptate quae saepe.
          </p>
          <a href="lien vers le site"></a>
        </article>

        <article>
          <h2>Projet Personnel</h2>
          <img src="" alt="" />
          <p>
            descriptif : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam sequi quaerat harum obcaecati molestiae aliquam eius
            ipsa! Laborum sapiente asperiores eveniet qui, accusamus consectetur
            numquam! Optio ad voluptate quae saepe.
          </p>
          <a href="lien vers le site"></a>
        </article>
      </section>
      <section>
        <h4>Hobbies</h4>
        <ul>
            <li>Sport</li>
            <li>Jeux vidéos</li>
            <li>Violon</li>
            <li>Cuisine</li>
        </ul>
      </section>
    </>
  );
}

export default BodyElement;
