import styles from './SeatingChart.module.css';

export default function SeatingChart() {
  const groundRows = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
  ];

  const balconyRowsTop = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const balconyRowsBottom = ['HH', 'II', 'JJ', 'KK', 'LL', 'MM'];

  const renderSeats = (count, category, keyPrefix) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className={`${styles.seat} ${styles[category]}`}
        title={category}
      />
    ));
  };

  const renderAligned = ({ count, cap, category, keyPrefix, align }) => {
    return (
      <div className={`${styles.part} ${styles[align]}`} style={{ '--cap': String(cap) }}>
        {renderSeats(count, category, keyPrefix)}
      </div>
    );
  };

  const renderSplit = ({
    leftCount,
    rightCount,
    cap,
    category,
    keyPrefix,
  }) => {
    return (
      <div className={styles.partSplit} style={{ '--cap': String(cap) }}>
        <div className={`${styles.partSegment} ${styles.alignStart}`}>
          {renderSeats(leftCount, category, `${keyPrefix}-l`)}
        </div>
        <div className={`${styles.partSegment} ${styles.alignEnd}`}>
          {renderSeats(rightCount, category, `${keyPrefix}-r`)}
        </div>
      </div>
    );
  };

  // Layout tuned to match the provided screenshot.
  // Note: any “sold” (grey) seats are rendered as their category color.
  // Ground floor has 3 blocks:
  // - Left mixed: Silver then Gold
  // - Center: VIP (top), Platinum (middle), Gold (bottom)
  // - Right mixed: Gold then Silver

  // Side blocks: straight Silver/Gold boundary.
  // Match the reference by keeping wings full until row R,
  // then tapering only for S–U.
  const leftSilverCap = 10;
  const leftGoldCap = 7;

  const leftSilverCounts = Array.from({ length: groundRows.length }).map((_, rowIndex) => {
    // Rows S/T/U are the last 3 (indexes 18/19/20)
    if (rowIndex === 18) return 9;
    if (rowIndex === 19) return 8;
    if (rowIndex === 20) return 6;
    return leftSilverCap;
  });

  const leftGoldCounts = Array.from({ length: groundRows.length }).map((_, rowIndex) => {
    if (rowIndex === 18) return 7;
    if (rowIndex === 19) return 6;
    if (rowIndex === 20) return 5;
    return leftGoldCap;
  });

  const rightGoldCounts = leftGoldCounts;
  const rightSilverCounts = leftSilverCounts;

  // Center block: the screenshot shows a thin VIP band, a large Platinum band,
  // then a large Gold band.
  const centerSoldTopRows = 1;
  const centerSoldTopCount = 18;
  const centerVipRows = 3;
  const centerVipCount = 18;
  const centerPlatinumRows = 7;
  const centerPlatinumCount = 18;
  const centerSoldDividerRows = 1;
  const centerSoldDividerCount = 18;
  const centerGoldRows =
    groundRows.length -
    centerSoldTopRows -
    centerVipRows -
    centerPlatinumRows -
    centerSoldDividerRows;
  const centerGoldCount = 18;

  return (
    <div className={styles.frame}>
      <div className={styles.inner}>
        <div className={styles.stageRow}>
          <div className={styles.stage}>STAGE</div>
        </div>

        <div className={styles.ground}>
          <div className={styles.labels}>
            {groundRows.map((label) => (
              <div key={`L-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
          </div>

          <div className={styles.groundBlocks}>
            <div className={styles.blockMixed}>
              {groundRows.map((rowLabel, rowIndex) => (
                <div key={`LM-${rowLabel}`} className={styles.row}>
                  {rowIndex === 18 ? (
                    // Row S: two isolated purple seats on the outer edge + main cluster near the inner boundary
                    renderSplit({
                      leftCount: 2,
                      rightCount: 5,
                      cap: leftSilverCap,
                      category: 'silver',
                      keyPrefix: `ls-${rowLabel}`,
                    })
                  ) : (
                    renderAligned({
                      count: leftSilverCounts[rowIndex],
                      cap: leftSilverCap,
                      category: 'silver',
                      keyPrefix: `ls-${rowLabel}`,
                      align: 'alignEnd',
                    })
                  )}
                  {renderAligned({
                    count: leftGoldCounts[rowIndex],
                    cap: leftGoldCap,
                    category: 'gold',
                    keyPrefix: `lg-${rowLabel}`,
                    align: 'alignStart',
                  })}
                </div>
              ))}
              <div className={`${styles.row} ${styles.outlierLeft}`}>
                {renderAligned({
                  count: 1,
                  cap: leftSilverCap,
                  category: 'silver',
                  keyPrefix: 'l-out-1',
                  align: 'alignEnd',
                })}
                {renderAligned({
                  count: 0,
                  cap: leftGoldCap,
                  category: 'gold',
                  keyPrefix: 'l-out-pad',
                  align: 'alignStart',
                })}
              </div>
            </div>

            <div className={styles.blockCenter}>
              {Array.from({ length: centerSoldTopRows }).map((_, index) => (
                <div key={`CS-T-${index}`} className={styles.row}>
                  {renderSeats(centerSoldTopCount, 'sold', `cs-t-${index}`)}
                </div>
              ))}
              {Array.from({ length: centerVipRows }).map((_, index) => (
                <div key={`CV-${index}`} className={styles.row}>
                  {renderSeats(centerVipCount, 'vip', `cv-${index}`)}
                </div>
              ))}
              {Array.from({ length: centerPlatinumRows }).map((_, index) => (
                <div key={`CP-${index}`} className={styles.row}>
                  {renderSeats(centerPlatinumCount, 'platinum', `cp-${index}`)}
                </div>
              ))}
              {Array.from({ length: centerSoldDividerRows }).map((_, index) => (
                <div key={`CS-D-${index}`} className={styles.row}>
                  {renderSeats(centerSoldDividerCount, 'sold', `cs-d-${index}`)}
                </div>
              ))}
              {Array.from({ length: centerGoldRows }).map((_, index) => (
                <div key={`CG-${index}`} className={styles.row}>
                  {renderSeats(centerGoldCount, 'gold', `cg-${index}`)}
                </div>
              ))}
            </div>

            <div className={styles.blockMixed}>
              {groundRows.map((rowLabel, rowIndex) => (
                <div key={`RM-${rowLabel}`} className={styles.row}>
                  {renderAligned({
                    count: rightGoldCounts[rowIndex],
                    cap: leftGoldCap,
                    category: 'gold',
                    keyPrefix: `rg-${rowLabel}`,
                    align: 'alignStart',
                  })}
                  {rowIndex === 18 ? (
                    // Row S: main cluster near inner boundary + two isolated seats on outer edge
                    renderSplit({
                      leftCount: 5,
                      rightCount: 2,
                      cap: leftSilverCap,
                      category: 'silver',
                      keyPrefix: `rs-${rowLabel}`,
                    })
                  ) : (
                    renderAligned({
                      count: rightSilverCounts[rowIndex],
                      cap: leftSilverCap,
                      category: 'silver',
                      keyPrefix: `rs-${rowLabel}`,
                      align: 'alignStart',
                    })
                  )}
                </div>
              ))}
              <div className={`${styles.row} ${styles.outlierRight}`}>
                {renderAligned({
                  count: 0,
                  cap: leftGoldCap,
                  category: 'gold',
                  keyPrefix: 'r-out-pad',
                  align: 'alignStart',
                })}
                {renderAligned({
                  count: 1,
                  cap: leftSilverCap,
                  category: 'silver',
                  keyPrefix: 'r-out-1',
                  align: 'alignStart',
                })}
              </div>
            </div>
          </div>

          <div className={styles.labels}>
            {groundRows.map((label) => (
              <div key={`R-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.balconyArea}>
          <div className={styles.labels}>
            {balconyRowsTop.map((label) => (
              <div key={`BLT-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
            <div className={styles.balconyLabelsSpacer} />
            {balconyRowsBottom.map((label) => (
              <div key={`BLB-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
          </div>

          <div className={styles.balconyBlocks}>
            <div className={styles.balconyGroup}>
              {balconyRowsTop.map((rowLabel) => (
                <div key={`BT-${rowLabel}`} className={styles.row}>
                  {renderSeats(14, 'balcony', `bt-l-${rowLabel}`)}
                  <div className={styles.aisle} />
                  {renderSeats(22, 'balcony', `bt-c-${rowLabel}`)}
                  <div className={styles.aisle} />
                  {renderSeats(14, 'balcony', `bt-r-${rowLabel}`)}
                </div>
              ))}
            </div>

            <div className={styles.balconyGroupSpacer} />

            <div className={styles.balconyGroup}>
              {balconyRowsBottom.map((rowLabel) => (
                <div key={`BB-${rowLabel}`} className={styles.row}>
                  {renderSeats(12, 'balcony', `bb-l-${rowLabel}`)}
                  <div className={styles.aisle} />
                  {renderSeats(20, 'balcony', `bb-c-${rowLabel}`)}
                  <div className={styles.aisle} />
                  {renderSeats(12, 'balcony', `bb-r-${rowLabel}`)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.labels}>
            {balconyRowsTop.map((label) => (
              <div key={`BRT-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
            <div className={styles.balconyLabelsSpacer} />
            {balconyRowsBottom.map((label) => (
              <div key={`BRB-${label}`} className={styles.label}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.balcony}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>Balcony</div>
            <div className={styles.legendPrice}>LKR 3000</div>
          </div>
        </div>

        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.silver}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>Silver</div>
            <div className={styles.legendPrice}>LKR 5000</div>
          </div>
        </div>

        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.gold}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>Gold</div>
            <div className={styles.legendPrice}>LKR 7500</div>
          </div>
        </div>

        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.platinum}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>Platinum</div>
            <div className={styles.legendPrice}>LKR 10000</div>
          </div>
        </div>

        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.vip}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>VIP</div>
            <div className={styles.legendPrice}>LKR 12000</div>
          </div>
        </div>

        <div className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.sold}`} />
          <div className={styles.legendText}>
            <div className={styles.legendName}>Sold</div>
          </div>
        </div>
      </div>
    </div>
  );
}
