import React from "react";

type Props = {
  params: {
    spaceName: string;
    groupName: string;
    snippetId: string;
  };
};

const Snippet: Page<Props> = ({ params }) => {
  const { spaceName, groupName, snippetId } = params;

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio
      deleniti voluptatibus suscipit eum harum maiores deserunt voluptatum
      voluptates, officia, perspiciatis cum, id corrupti! Debitis impedit quam
      magnam aliquid? Culpa officia mollitia sunt quibusdam accusamus aperiam
      consequatur ex asperiores est, sequi voluptates repellat, distinctio quae,
      rerum eum iusto non dolore? Repellendus, qui fugiat esse quis quas optio
      dignissimos numquam consequatur expedita, libero totam dolor, eius sunt
      quibusdam cum tempore! Voluptatibus alias totam, vel aperiam culpa
      repudiandae eveniet maiores sint. Modi, laborum natus. Animi quos saepe
      quis aspernatur vero natus deleniti esse non labore odio corrupti
      provident reprehenderit placeat, quam recusandae.
    </div>
  );
};

export default Snippet;
