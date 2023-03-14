import { Footer } from "flowbite-react";

export default function FooterComponent() {
    return (
        <>
            <Footer container={true}>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            href="#"
                            src="./Images/Mypr.png"
                            alt="Smart_Trolley logo"
                            name="Smart Trolley"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        href="#"
                        by="Smart Trolley™"
                        year={2022}
                    />
                </div>
            </Footer>
        </>
    )
}