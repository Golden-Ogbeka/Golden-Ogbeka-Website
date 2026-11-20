import { useTranslation } from 'next-i18next';
import StatementOfValueData, { STATEMENT_STATUS_LABELS, StatementRow } from '../../../data/StatementOfValue';
import ProjectsData from '../../../data/Projects';

function RowValue({ row }: { row: StatementRow }) {
  const { t } = useTranslation(['home']);
  if (row.status) {
    const pending = row.status === 'completing' || row.status === 'inProgress';
    return (
      <span className={pending ? 'text-accent' : ''}>
        {t(`home:statement.status.${row.status}`, STATEMENT_STATUS_LABELS[row.status])}
      </span>
    );
  }
  if (row.projectCount) return <span>{ProjectsData.length}</span>;
  return <span dir='ltr'>{row.value}</span>;
}

/** Ledger-style summary of leadership, governance, qualifications and track record. */
export default function StatementOfValue() {
  const { t } = useTranslation(['home']);
  const columns = [StatementOfValueData.slice(0, 2), StatementOfValueData.slice(2)];

  return (
    <section aria-labelledby='statement-title' className='reveal pt-24 md:pt-32'>
      <div className='rounded-[20px] border border-zinc-200 dark:border-zinc-800 px-6 sm:px-10 pt-8 pb-7'>
        <div className='flex flex-wrap justify-between items-baseline gap-2 pb-4 border-b border-zinc-900 dark:border-zinc-100'>
          <h2 id='statement-title' className='text-2xl sm:text-[1.75rem]'>
            {t('home:statement.title')}
          </h2>
          <span className='text-sm text-zinc-500 dark:text-zinc-400'>{t('home:statement.period')}</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-14'>
          {columns.map((groups, ci) => (
            <div key={ci}>
              {groups.map((group) => (
                <div key={group.id} className='pt-6'>
                  <h3 className='font-sans text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent mb-1'>
                    {t(`home:statement.group.${group.id}`, group.title)}
                  </h3>
                  <dl>
                    {group.rows.map((row) => (
                      <div
                        key={row.id}
                        className='grid grid-cols-[1fr_auto] gap-6 items-baseline py-3 border-b border-zinc-200 dark:border-zinc-800 text-[15px]'
                      >
                        <dt className='text-zinc-700 dark:text-zinc-300'>
                          {t(`home:statement.row.${row.id}.label`, row.label)}
                          {row.detail && (
                            <span className='block text-[13px] text-zinc-500 dark:text-zinc-400'>
                              {t(`home:statement.row.${row.id}.detail`, row.detail)}
                            </span>
                          )}
                        </dt>
                        <dd className='font-medium text-end tabular-nums whitespace-nowrap'>
                          <RowValue row={row} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='flex flex-wrap justify-between items-baseline gap-2 mt-7 pt-5 border-t border-zinc-900 dark:border-zinc-100'>
          <span className='text-xs uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400'>
            {t('home:statement.closing')}
          </span>
          <span className='font-display italic text-2xl sm:text-3xl text-accent'>{t('home:statement.closingValue')}</span>
        </div>
      </div>
    </section>
  );
}
