import { createHash } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";

const photos = {
  "polo.jpg": {
    url: "https://litter.catbox.moe/i18hk0.jpg",
    sha1: "076d6e487b3552edef032aa42caef653a26dc6d6",
  },
  "scrub.jpg": {
    url: "https://litter.catbox.moe/k4uhnk.jpg",
    sha1: "6f3231fb0154651a294a2c6259630a82a2032fb7",
  },
  "rugby.jpg": {
    url: "https://litter.catbox.moe/9cjkrb.jpg",
    sha1: "55f78ad6d063c87ead3e83a6587222909bc43369",
  },
  "action.jpg": {
    url: "https://litter.catbox.moe/vny4rh.jpg",
    sha1: "fc51246b4783f743c3805d620ce265211f314c4c",
  },
};

function sha1(buf) {
  return createHash("sha1").update(buf).digest("hex");
}

await mkdir("public/photos", { recursive: true });

await Promise.all(
  Object.entries(photos).map(async ([name, photo]) => {
    const dest = `public/photos/${name}`;
    try {
      const current = await readFile(dest);
      if (sha1(current) === photo.sha1) return;
    } catch {
      // fresh checkout
    }
    const res = await fetch(photo.url);
    if (!res.ok) throw new Error(`Could not fetch ${name} (${res.status})`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (sha1(buf) !== photo.sha1) throw new Error(`Checksum mismatch for ${name}`);
    await writeFile(dest, buf);
  }),
);
