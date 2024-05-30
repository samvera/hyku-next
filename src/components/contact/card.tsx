interface ContactCardProps {
  description?: string;
  email?: string;
  title: string;
  url?: string;
}

export default function ContactCard({
  description,
  email,
  title,
  url,
}: ContactCardProps) {
  return (
    <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-10">
      <h3 className="text-base font-semibold leading-">{title}</h3>
      <dl className="mt-3 space-y-1 text-sm leading-6 text-foreground-muted">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            {email && (
              <a
                className="font-semibold text-primary"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            )}
            {url && (
              <a
                className="font-semibold text-primary break-words no-underline"
                href={url}
              >
                {url}
              </a>
            )}
            {description && <p>{description}</p>}
          </dd>
        </div>
      </dl>
    </div>
  );
}
