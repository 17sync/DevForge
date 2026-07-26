import Button from "../common/button";
import Container from "../common/container";

export default function Hero() {
    return (
        <section className="py-28">

            <Container>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <p className="mb-4 font-medium text-neutral-500">
                            Build. Customize. Showcase.
                        </p>

                        <h1 className="mb-6 text-6xl font-bold leading-tight">
                            Build a portfolio that showcases your craft.
                        </h1>

                        <p className="mb-8 text-lg text-neutral-600">
                            DevForge helps developers create beautiful portfolio
                            websites without writing frontend code.
                        </p>

                        <div className="flex gap-4">

                            <Button>
                                Get Started
                            </Button>

                            <button className="rounded-lg border border-neutral-300 px-6 py-3">
                                View Templates
                            </button>

                        </div>

                    </div>

                    <div className="flex h-[500px] items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100">

                        <h2 className="text-2xl font-semibold text-neutral-500">
                            Portfolio Preview
                        </h2>

                    </div>

                </div>

            </Container>

        </section>
    );
}