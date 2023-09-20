import React from "react";
import useProducts from "../hooks/useProducts";
import { Button, Card, DatePicker, Image } from "antd";
import Link from "antd/es/typography/Link";
const Home = () => {
  const { titles, isLoading, isError } = useProducts();

  console.log({ titles });
  console.log({ isLoading });
  console.log({ isError });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Home</h1>
      <DatePicker />
      <Card
        title="Lorem Ipsum"
        hoverable
        style={{ width: "15rem" }}
        headStyle={{ backgroundColor: "red" }}
        bodyStyle={{
          display: "none",
        }}
        cover={
          <Image
            loading={true}
            src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
          />
        }
        extra={
          <Link to="/error">
            <Button type="primary">btn</Button>
          </Link>
        }
      ></Card>

      {titles.map((item, index) => (
        <p key={item + index}>{item}</p>
      ))}
    </>
  );
};

export default Home;
