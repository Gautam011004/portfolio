import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function WorkExperienceSection() {
    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Work Experience</h2>
                    <div className="space-y-6 sm:space-y-8">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Backend Developer</CardTitle>
                                        <CardDescription className="text-base">Momentus</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>Feb 2026 - Present</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Built a marketing memory layer platform enabling brands to store, visualize, and manage brand memory through an interactive web dashboard.</li>
                                    <li>• Developed in-dashboard editing capabilities allowing direct modifications to the memory layer without requiring external tools.</li>
                                    <li>• Implemented memory extraction pipelines supporting multiple file formats including PDFs, images, and documents for automated brand knowledge ingestion.</li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Python</Badge>
                                    <Badge variant="outline">FastAPI</Badge>
                                    <Badge variant="outline">TypeScript</Badge>
                                    <Badge variant="outline">Next.js</Badge>
                                    <Badge variant="outline">Tailwind CSS</Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Developer Intern</CardTitle>
                                        <CardDescription className="text-base">Reliance Industries</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>June 2025 - July 2025</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Contributed to the development of an internal web application to automate the land acquisition workflow.</li>
                                    <li>• Enabled document workflow automation with role-based access, approval routing,
                                    and real-time status tracking</li>
                                    <li>• Worked closely with diverse teams and gained firsthand experience in navigating
                                    corporate workflows</li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">TypeScript</Badge>
                                    <Badge variant="outline">Next.js</Badge>
                                    <Badge variant="outline">Tailwind CSS</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}