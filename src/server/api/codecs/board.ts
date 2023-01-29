import { z } from "zod";

export const schema = z.object({
  boards: z.array(
    z.object({
      board: z.string(),
      title: z.string(),
      ws_board: z.number(),
      per_page: z.number(),
      pages: z.number(),
      max_filesize: z.number(),
      max_webm_filesize: z.number(),
      max_comment_chars: z.number(),
      max_webm_duration: z.number(),
      bump_limit: z.number(),
      image_limit: z.number(),
      cooldowns: z.object({
        threads: z.number(),
        replies: z.number(),
        images: z.number(),
      }),
      meta_description: z.string(),
      is_archived: z.number(),
      spoilers: z.number().optional(),
      custom_spoilers: z.number().optional(),
      user_ids: z.number().optional(),
      country_flags: z.number().optional(),
      code_tags: z.number().optional(),
      webm_audio: z.number().optional(),
      min_image_width: z.number().optional(),
      min_image_height: z.number().optional(),
    }),
  ),
});
