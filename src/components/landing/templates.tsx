import Container from "../common/container";

const templates = [
    "Modern",
    "Minimal",
    "Professional"
];

export default function Templates() {
    return (
        <section className="bg-neutral-50 py-24">

            <Container>

                <h2 className="mb-12 text-center text-4xl font-bold">
                    Portfolio Templates
                </h2>

                <div className="grid gap-8 md:grid-cols-3">

                    {templates.map((template) => (
                        <div
                            key={template}
                            className="flex h-80 items-center justify-center rounded-xl border border-neutral-200 bg-white"
                        >
                            <h3 className="text-2xl font-semibold">
                                {template}
                            </h3>
                        </div>
                    ))}

                </div>

            </Container>

        </section>
    );
}