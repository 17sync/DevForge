import { Code, LayoutTemplate, Eye, Cloud } from "lucide-react";
import Container from "../common/container";

const features = [
    {
        icon: <Code size={32} />,
        title: "No-Code Builder",
        description:
            "Create a professional developer portfolio without writing frontend code."
    },
    {
        icon: <Eye size={32} />,
        title: "Live Preview",
        description:
            "See changes instantly while editing your portfolio."
    },
    {
        icon: <LayoutTemplate size={32} />,
        title: "Modern Templates",
        description:
            "Choose from multiple responsive portfolio templates."
    },
    {
        icon: <Cloud size={32} />,
        title: "Cloud Sync",
        description:
            "Save your portfolios securely using Firebase."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-neutral-50">
            <Container>

                <h2 className="mb-12 text-center text-4xl font-bold">
                    Features
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-xl border border-neutral-200 bg-white p-8"
                        >
                            <div className="mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-xl font-semibold">
                                {feature.title}
                            </h3>

                            <p className="text-neutral-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}