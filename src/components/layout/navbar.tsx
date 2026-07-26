import Container from "../common/container";

export default function Navbar() {
    return (
        <nav className="sticky top-0 border-b border-neutral-200 bg-white">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <h1 className="text-2xl font-bold">
                        DevForge
                    </h1>

                    <div className="hidden gap-8 md:flex">

                        <a href="#">
                            Features
                        </a>

                        <a href="#">
                            Templates
                        </a>

                        <a href="#">
                            How It Works
                        </a>

                    </div>

                    <button className="rounded-lg bg-black px-5 py-2 text-white">
                        Get Started
                    </button>

                </div>
            </Container>
        </nav>
    );
}