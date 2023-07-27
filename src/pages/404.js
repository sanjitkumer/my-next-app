import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/news");
  }, 5000);
  return (
    <div>
      <img
        src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
