import { Button } from "antd";
import Link from "next/link";

const NewsHomePage = () => {
  return (
    <div>
      <h1>News Home Page</h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NewsHomePage;
