import Container from "../common/container";

const steps = [
    "Create your account",
    "Customize your portfolio",
    "Publish & share"
];

export default function HowItWorks() {
    return (
        <section className="py-24">
            <Container>

                <h2 className="mb-16 text-center text-4xl font-bold">
                    How It Works
                </h2>

                <div className="grid gap-10 md:grid-cols-3">

                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className="rounded-xl border border-neutral-200 p-8 text-center"
                        >
                            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {step}
                            </h3>
                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}