import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Oval
        height={40}
        width={40}
        color="var(--primary)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="var(--primary-muted)"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </>
  );
}
