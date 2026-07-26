import Button from "../common/button";
import Container from "../common/container";

export default function CTA() {
    return (
        <section className="py-28">

            <Container>

                <div className="rounded-2xl bg-black p-16 text-center text-white">

                    <h2 className="mb-6 text-5xl font-bold">
                        Ready to build your portfolio?
                    </h2>

                    <p className="mb-8 text-neutral-300">
                        Start creating your professional developer portfolio today.
                    </p>

                    <Button>
                        Get Started
                    </Button>

                </div>

            </Container>

        </section>
    );
}