"use client";

import Icon from "@components/icon";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionItem } from "@nextui-org/react";

type Props = {
  title: string;
  hasFolderIcon?: boolean;
};

const Snippets = ({ title, hasFolderIcon = true }: Props) => {
  return (
    <Accordion
      itemClasses={{
        title: "text-white text-sm",
        indicator: "-rotate-180",
        startContent: "text-white",
        content: "overflow-y-scroll h-96",
      }}>
      <AccordionItem
        key={1}
        title={title}
        className="text-white "
        startContent={
          hasFolderIcon ? (
            <Icon Element={FolderOpenIcon} className="h-5 w-5" />
          ) : null
        }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        assumenda? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Esse nostrum in illum ipsam corrupti distinctio amet saepe temporibus
        exercitationem harum at labore optio cumque dolorum, tempora a! Iste
        mollitia excepturi iusto praesentium eaque nesciunt corporis, ea id
        blanditiis labore aut voluptate illo officia sit libero tempora odit
        voluptatum nam error unde, quis nostrum rem nihil! Vitae impedit sint
        magnam nisi ut et id quas beatae magni, laboriosam nam ducimus in?
        Possimus at deleniti, amet cupiditate ipsam eos quisquam quibusdam
        dolorum pariatur ab et reprehenderit laborum ex omnis minus aliquam
        obcaecati ipsa. Asperiores, at doloremque, sit dolorem obcaecati
        consequatur qui eligendi iusto, nam maiores rem. Aliquam, dicta rem
        dolor placeat consequatur velit omnis similique reprehenderit, vitae est
        labore tenetur eius? Molestiae soluta omnis dolorum maxime aliquam vel,
        ad eligendi consequatur quia qui perferendis error voluptas quod ut
        animi voluptatem modi amet eum beatae dolorem mollitia? Quidem sit
        doloremque ipsa eaque praesentium placeat dignissimos qui blanditiis
        quos error, obcaecati provident! Voluptatum asperiores sapiente
        inventore magni aliquam nesciunt. Modi debitis harum, iure natus, ipsam
        tempore quos non alias pariatur saepe dolor illum, perspiciatis neque
        vel labore. Aliquam magni nemo dolorum officia minus rerum
        exercitationem a accusantium eveniet, saepe error qui quibusdam itaque
        dolore maxime aspernatur sunt eius velit. Et minus libero beatae nulla
        error iusto suscipit odit deleniti ab ex voluptas molestias expedita
        consequuntur vitae veniam placeat ipsum dignissimos, facilis tempora
        laboriosam eos? Ipsum sunt ab quaerat deleniti sequi nam corporis enim
        debitis, quidem eaque vero provident, rem, placeat quas quis officia
        voluptas dignissimos. Aliquam placeat, molestiae tenetur modi repellat
        fuga nihil beatae, autem voluptate aut excepturi eum! Sed magnam beatae
        eaque officiis dicta minima praesentium, dolor earum laudantium ducimus
        quae porro? Expedita deleniti soluta dicta cum est? Non accusamus, aut
        reiciendis dolore molestiae error nam iure recusandae tenetur molestias
        omnis deserunt eum consequuntur maxime nostrum harum hic enim, quod ut
        assumenda quaerat? Id beatae in eaque! Fugit exercitationem praesentium
        quis rem nobis doloremque. Quasi nesciunt ipsam illum. Velit aliquid
        officiis similique minus blanditiis sed veniam amet explicabo beatae,
        neque culpa porro voluptatum voluptatem repudiandae, aut commodi facilis
        excepturi libero. Repellendus nesciunt nemo minus dolore facere ipsa,
        similique sunt modi maxime sapiente possimus deserunt necessitatibus
        delectus consectetur assumenda deleniti itaque veritatis quaerat eaque
        quia voluptates. Id non totam atque repudiandae laudantium natus
        accusantium ipsa aliquid cumque unde voluptatum excepturi voluptatibus
        eveniet, debitis accusamus eius illum similique ipsum nisi! Id quia nam
        cumque at?
      </AccordionItem>
    </Accordion>
  );
};

export default Snippets;
