function Footer() {
  const footerText = (
    <p className="text-xl">
      James Luong 2022 &copy;
    </p>
  )

  return (
    <footer className="absolute bottom-0 text-center text-lg w-full bg-primary p-2">
      {footerText}
    </footer>
  );
}

export default Footer;
