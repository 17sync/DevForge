import Container from "../common/container";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 py-10">

            <Container>

                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <h2 className="text-xl font-bold">
                        DevForge
                    </h2>

                    <p className="text-neutral-500">
                        © 2026 DevForge. All rights reserved.
                    </p>

                </div>

            </Container>

        </footer>
    );
}