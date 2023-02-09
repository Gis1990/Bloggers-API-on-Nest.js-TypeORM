import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BlogsQueryRepository } from "../../query-repositories/blogs.query.repository";
import { BlogClass } from "../../schemas/blogs.schema";

export class GetBlogByIdWithCorrectViewModelCommand {
    constructor(public readonly id: string) {}
}

@QueryHandler(GetBlogByIdWithCorrectViewModelCommand)
export class GetBlogByIdWithCorrectViewModelQuery implements IQueryHandler<GetBlogByIdWithCorrectViewModelCommand> {
    constructor(private blogsQueryRepository: BlogsQueryRepository) {}

    async execute(query: GetBlogByIdWithCorrectViewModelCommand): Promise<BlogClass | null> {
        return await this.blogsQueryRepository.getBlogByIdWithCorrectViewModel(query.id);
    }
}
