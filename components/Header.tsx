import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/phenom-logo.jpg" alt="logo" width={140} height={90} />
    </header>
  );
};

export default Header;
